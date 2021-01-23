<template>
    <v-dialog
        v-model="$store.state.admin.addItemDialog"
        width="800"
        height="600"
    >
        <v-card>
            <v-card-title class="headline">Dodajanje izdelka</v-card-title>
            <v-card-actions>
                <v-container>
                    <v-form
                        class="ma-auto"
                        width="500"
                    >
                        <v-row>
                            <v-col>
                                <v-text-field
                                    label="Ime izdelka"
                                    v-model="itemName"
                                    type="text"
                                    required
                                ></v-text-field>

                            </v-col>
                            <v-col>
                                <v-text-field
                                    prefix="$"
                                    label="Cena izdelka"
                                    v-model="itemPrice"
                                    @focusout="formatPrice()"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-text-field
                                    label="Količina izdelkov"
                                    v-model.number="quantity"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field
                                    v-model="dimensions"
                                    label="Dimenzija"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-text-field
                                    label="Barva"
                                    v-model="color"
                                    dense
                                    solo
                                    required
                                >
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-select
                                    :items="subCategory"
                                    v-model="category"
                                    label="Kategorija"
                                    :disabled="!!addNewCategory"
                                    dense
                                    required
                                    solo
                                >
                                </v-select>
                            </v-col>
                        </v-row>

                        <v-checkbox
                            v-model="addNewCategory"
                            label="Dodaj novo kategorijo"
                        ></v-checkbox>

                        <v-text-field
                            label="Dodaj novo kategorijo"
                            v-if="addNewCategory"
                            v-model="customCategory"
                        >
                        </v-text-field>

                        <v-file-input
                            label="File input"
                            required
                            multiple
                            @click:clear="deleteImages"
                            @change="previewImages"
                        ></v-file-input>

                        <v-row v-if="showImages.length > 0">
                            <v-col
                                cols="2"
                                v-for="img in showImages" :key="img.id">
                                <v-img
                                    :class="primaryImage === img.data ? 'primaryImage' : null"
                                    :src="img.url"
                                    @click="setPrimaryImage(img.data)"
                                >
                                </v-img>
                            </v-col>
                        </v-row>

                        <v-textarea
                            label="Opis"
                            v-model="itemDescription"
                            required
                            no-resize
                        >
                        </v-textarea>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="green darken-1"
                                text
                                @click="addItem()"
                            >
                                Dodaj
                            </v-btn>

                            <v-btn
                                color="green darken-1"
                                text

                                @click="$store.state.admin.addItemDialog = false"
                            >
                                Preklic
                            </v-btn>
                        </v-card-actions>
                    </v-form>

                    <v-alert color="error" v-model="errorMessage.length > 0">
                        {{ errorMessage }}
                    </v-alert>
                </v-container>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import api from "../../../services/api";
import Axios from 'axios'

export default {
    data() {
        return {
            itemName: null,
            itemPrice: null,
            dimensions: null,
            category: null,
            itemDescription: null,
            customCategory: null,
            quantity: null,
            color: null,

            subCategory: [
                "Unikat artikli",
                "Redni artikli"
            ],
            images: [],
            addNewCategory: false,

            // For preview
            showImages: [],
            primaryImage: [],
            errorMessage: ''
        }
    },
    methods: {
        // Formats item price to 2 decimal
        formatPrice() {
            this.itemPrice = this.itemPrice.match(/^\d+\.?\d{1,2}/)
        },
        addItem() {
            Axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
            // Creates form data for image upload
            const fd = new FormData()

            // Updates images to fs object
            this.images.forEach((key) => {
                fd.append("images[]", key)
            })
            fd.append('itemName', this.itemName)
            fd.append('itemPrice', this.itemPrice)
            fd.append('dimensions', this.dimensions)
            fd.append('category', this.addNewCategory ? this.customCategory : this.category)
            fd.append('quantity', this.quantity)
            fd.append('color', this.color)
            fd.append('itemDescription', this.itemDescription)
            fd.append('primaryImage', this.primaryImage)

            api.addItem(fd).then((response) => {
                this.itemName = null
                this.itemPrice = null
                this.dimensions = null
                this.category = null
                this.itemDescription = null
                this.customCategory = null
                this.quantity = null
                this.color = null

                this.deleteImages()

                this.errorMessage = ''
                this.$store.state.admin.addItemText = response.data
                this.$store.state.admin.responseAddItem = true
                this.$store.state.admin.addItemDialog = false

                return this.$store.dispatch('getItems')
            })
                .catch((err) => {
                    this.errorMessage = err.response.data.message
                })
        },
        // Adds files to images array
        previewImages(event) {
            event.forEach((element, index) => {
                this.images.push(element)
                this.showImages.push({url: URL.createObjectURL(element), id: index, data: element})
            })
        },
        // Sets primary image
        setPrimaryImage(data) {
            this.primaryImage = data
        },

        // Deletes all the images when clear button is clicked
        deleteImages() {
            this.images = []
            this.showImages = []
        }
    }
}
</script>

<style scoped>
.primaryImage {
    border: solid 3px red;
}
</style>
