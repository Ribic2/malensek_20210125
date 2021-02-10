<template>
    <v-dialog
        v-model="$store.state.admin.changeItem_Dialog"
        width="500"
    >
        <v-card>
            <v-card-title class="headline">Spremeni informacije o izdelku</v-card-title>

            <v-card-actions>
                <v-container>
                    <v-form
                        class="ma-auto"
                        width="500">
                        <v-text-field
                            v-model="itemName"
                            label="Ime izdelka"
                        ></v-text-field>

                        <v-text-field
                            label="Količina"
                            v-model="quantity"

                        ></v-text-field>

                        <v-text-field
                            label="Cena izdelka"
                            v-model="itemPrice"
                            @focusout="formatPrice()"
                        ></v-text-field>

                        <v-textarea
                            v-model="itemDescription"
                            label="Opis"
                            no-resize
                        >
                        </v-textarea>

                        <v-checkbox label="Razprodaja" v-model="isOnSale"></v-checkbox>

                        <div v-if="isOnSale">
                            <v-text-field
                                :value="item.discount"
                                v-model="discount"
                                label="Znižanje v odstotkih"
                            ></v-text-field>
                        </div>
                    </v-form>
                </v-container>
            </v-card-actions>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="green darken-1"
                    text
                    @click="changeData()"
                >
                    Spremeni
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="cancel"
                >
                    Preklici
                </v-btn>
            </v-card-actions>
            {{ itemPrice }}
        </v-card>
    </v-dialog>
</template>

<script>
import api from "../../../services/api";

export default {
    name: "changeItem.vue",
    props:[
        "item"
    ],
    data() {
        return {
            id: this.item.id,
            itemPrice: parseFloat(this.item.itemPrice).toFixed(2),
            itemName:this.item.itemName,
            quantity: this.item.quantity,
            itemDescription: this.item.itemDescription,
            discount: this.item.discount,
            isOnSale: this.item.isOnSale
        }
    },
    methods: {
        // Formats item price to 2 decimal
        formatPrice() {
            if(this.itemPrice !== null){
                this.itemPrice = parseFloat(this.itemPrice).toFixed(2)
            }
        },
        changeData(){
            let data = {
                itemPrice: this.itemPrice,
                itemName: this.itemName,
                quantity: this.quantity,
                itemDescription: this.itemDescription,
                isOnSale: this.isOnSale,
                discount: this.isOnSale ? this.discount : 0
            }

            api.changeItem(data, this.id)
            .then((response)=>{
                this.$store.dispatch('getItems')
                this.$store.state.admin.changeItem_Dialog = false;

                this.$store.state.admin.responseText = "Izdelek spremenjen!"
                this.$store.state.admin.responseType = true
                this.$store.state.admin.responseStatus = true
            })
        },
        cancel(){
            this.$store.commit('CHANGE_ITEM_DIALOG', false)
        }
    },
}
</script>
