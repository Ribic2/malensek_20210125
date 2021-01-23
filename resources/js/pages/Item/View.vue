<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
                xs="12"
                sm="12"
                md="12"
                lg="6"
            >
                <v-row>
                    <v-col>
                        <v-responsive
                            :aspect-ratio="16/9"
                            height="500px"
                        >
                            <v-img :src="selectedImage" height="100%" width="100%"></v-img>
                        </v-responsive>
                    </v-col>
                </v-row>

                <!--images-->
                <v-row>
                    <v-col
                        class="images"
                        v-for="(image, i) in images"
                        :key="i"
                        cols="2"
                        md="3"
                        sm="3"
                    >
                        <v-img
                            :src="'/storage/'+image"
                            @click="selectImage('/storage/'+image)"
                        >
                        </v-img>
                    </v-col>
                </v-row>

            </v-col>

            <!--Add to cart part-->
            <v-col>
                <v-row>
                    <v-col
                        cols="12"
                    >
                        <v-card
                            min-height="200"
                            elevation="0"
                        >

                            <v-card-title class="font-weight-bold">
                                <h1>{{ product.itemName }}</h1>
                            </v-card-title>

                            <v-card-text
                                class="black--text"
                            >{{ product.itemDescription }}
                            </v-card-text>

                            <v-card-text>
                                <v-row>
                                    <v-col>
                                        <h3 class="mt-2">&euro;{{ product.itemPrice }}.00</h3>
                                    </v-col>
                                    <v-col>
                                        <v-rating v-model="product.OverallRating" readonly></v-rating>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn
                                    v-if="product.delisted === 0 && product.quantity > 0  && !$store.getters.setCart(product.id)"
                                    elevation="0"
                                    :ripple="false"
                                    class="ml-2"
                                    @click="addToCart(product)"
                                >V košarico
                                </v-btn>

                                <v-btn
                                    v-if="product.delisted === 0 && product.quantity > 0 && $store.getters.setCart(product.id)"
                                    elevation="0"
                                    class="ml-2"
                                    :ripple="false"
                                    @click="addToCart(product)"
                                >Izdelek je že v košarici
                                </v-btn>

                                <v-btn
                                    v-else-if="product.quantity <= 0 || product.delisted === 1"
                                    elevation="0"
                                    disabled
                                    :ripple="false"
                                    class="ml-2"
                                >Izdelka ni na voljo
                                </v-btn>


                                <v-btn
                                    icon
                                    @click="addToFavourites(product)"
                                >
                                    <v-icon  :color="this.$store.getters.setFavourites(product.id) ? 'blue': null">{{ favouritesButton }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row>
            <Reviews></Reviews>
        </v-row>
        <!-- User adds new review -->

    </v-container>
</template>

<script>

import Reviews from "./Reviews";
import api from '../../services/api.js'
import { mdiStar } from '@mdi/js'

export default {
    components: {
        Reviews
    },
    data() {
        return {
            product: '',
            images: [],
            selectedImage: null,
            favouritesButton: mdiStar
        }
    },
    methods: {
        getItemData() {
            let id = this.$route.params.id
            api.getProductData(id)
                .then((results) => {
                    this.product = results.data.item
                    this.images = results.data.images
                    console.log(results.data.images)
                    this.selectedImage = '/storage/'+results.data.images[0]
                })
        },
        /**
         * Sends request to Vuex that will store newly added favourite item
         * @param {OBJECT} e
         */
        addToFavourites(e) {
            if (this.$store.state.user.user === null) {
                this.$store.dispatch('addToFavouritesGuest', {items: e})
            } else {
                this.$store.dispatch('addToFavourites', e.id)
            }
        },

        /**
         * Adds product to cart
         */
        addToCart(product) {
            // If user is not registered, if not it will call function for guest
            // otherwise it will call function to add item to cart for logged in user
            if (this.$store.state.user.user === null) {
                let data = {
                    items: product,
                    quantity: 1
                }
                return this.$store.dispatch('addItemToCartGuest', data)
            } else {
                let data = {
                    id: product.id,
                    quantity: 1
                }
                return this.$store.dispatch('addItemToCart', data)
            }
        },

        selectImage(e) {
            this.selectedImage = e
        }

    },
    mounted() {
        this.getItemData()
    }
}
</script>

