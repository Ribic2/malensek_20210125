<template>
    <v-container fluid>
        <v-row v-if="cart.length == 0">
            <empty
                icon="mdi-cart"
                error-text="Košarica je prazna!"
            ></empty>
        </v-row>
        <v-row v-else>
            <v-col cols="12">
                <v-card v-for="item in cart" v-bind:key="item.id"
                        min-height="200"
                        class="mt-3"
                >
                    <v-row class="p-3">
                        <v-col
                            cols="12"
                            md="2"
                            lg="2"
                            xl="2"
                        >
                            <v-img
                                :aspect-ratio="4/3"
                                class="productImg"
                                :src="`storage${item.items.itemImgDir}/${item.items.itemImg}`"
                                alt="Slika ne obstaja"
                            >
                            </v-img>
                        </v-col>

                        <v-col
                            cols="12"
                            xl="2"
                            lg="2"
                        >
                            <p class="title">Ime izdelka</p>
                            <p class="headline">{{ item.items.itemName }}</p>
                        </v-col>

                        <v-col
                            cols="12"
                            xl=2
                            lg="2"
                        >
                            <p class="title">Količina</p>
                            <p class="headline">{{ item.quantity }}</p>
                        </v-col>

                        <v-col
                            cols="12"
                            xl=2
                            lg="2"
                        >
                            <p class="title">Cena izdelka</p>
                            <p class="headline">{{ parseFloat(item.items.itemPrice).toFixed(2) }} &euro;</p>
                        </v-col>

                        <v-col
                            cols="12"
                            xl=2
                            lg="2"
                        >
                            <p class="title">Skupna cena</p>
                            <p class="headline">Cena: {{ parseFloat(item.items.itemPrice * item.quantity).toFixed(2) }}
                                &euro;</p>
                        </v-col>

                        <v-col>
                            <v-btn-toggle
                                class="quantityChangerHolder mb-1 mt-5"
                                rounded>
                                <v-btn height="56"
                                       @click="changeQuantity(item, 1)"
                                >
                                    <v-icon>{{ add }}</v-icon>
                                </v-btn>

                                <v-text-field
                                    flat
                                    outlined
                                    v-bind:value="item.quantity"
                                    v-model="item.quantity"
                                    @focusout="changeQuantityCustom(item.items.id , item.quantity)"
                                    class="quantityField"
                                >{{ item.quantity }}


                                </v-text-field>

                                <v-btn
                                    height="56"
                                    @click="changeQuantity(item, -1)"
                                >
                                    <v-icon>{{ minus }}</v-icon>
                                </v-btn>
                            </v-btn-toggle>

                            <br>

                            <!--Delete data from cart array -->
                            <v-btn
                                color="error"
                                class="mb-1 mt-5"
                                width="90%"
                                :block="$vuetify.breakpoint.mobile"
                                @click="deleteCartProduct(item)"
                            >
                                izbriši
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import empty from '../../pages/errors/empty'
import api from "../../services/api";
import {mdiPlus, mdiMinus} from '@mdi/js'

export default {
    components: {
        empty
    },
    data() {
        return {
            error: false,
            add: mdiPlus,
            minus: mdiMinus,
        }
    },
    methods: {
        /**
         * Removes item from cart array
         * @param item it item object
         */
        deleteCartProduct(item) {
            // If user is not logged in, then localstorage/state is modified
            // Else it updates database
            if (this.user.length === 0) {
                this.cart.forEach((element, index) => {
                    if (element === item) {
                        this.$store.state.cart.cart.splice(index, 1)
                    }
                })
                localStorage.setItem('cart', JSON.stringify(this.$store.state.cart.cart))
            } else {
                api.deleteFromCart(item.itemId)
                    .then(() => {
                        this.$store.dispatch('getCart')
                    })
            }
        },

        /**
         * Sets quantity to provided quantity
         * @param id item id
         * @param quantityChange quantity of an item in user's cart to change to
         */
        changeQuantityCustom(id, quantityChange) {
            console.log(quantityChange)
            // Checks if given input is bigger than 0
            if (quantityChange > 0) {
                this.$store.state.cart.cart.forEach((element) => {
                    if (element.items.id === id) {
                        element.quantity = parseInt(quantityChange);
                    }
                })

                let data = {
                    quantity: quantityChange,
                    cart: this.cart ? this.cart : null,
                    token: this.user.token ? this.user.token : null
                }
                api.changeQuantityCustom(id, data)
                    .then((response) => {
                        // If given value is bigger than current stock then it sets quantity to current item stock
                        if (response.data.id) {
                            this.$store.dispatch('updateQuantity',
                                {id: response.data.id, quantity: response.data.quantity}
                            )
                        }
                    })
                // Re-stores everything to localstorage
                localStorage.setItem('cart', JSON.stringify(this.cart))
            }
        },
        /**
         * Changes quantity for registered user
         * @param item is item object
         * @param quantityChange
         */
        changeQuantity(item, quantityChange) {
            // Checks if user is guest
            if (this.user.length === 0) {
                this.cart.forEach((element) => {
                    if (element === item) {
                        // Check if quantity is getting incremented or decremented
                        if(element.quantity + quantityChange <= element.items.quantity && element.quantity + quantityChange > 0){
                            element.quantity += quantityChange;
                        }
                    }
                })
                localStorage.setItem('cart', JSON.stringify(this.$store.state.cart.cart))
            } else {

                if (quantityChange === 1) {
                    this.$store.state.cart.cart.forEach((element) => {
                        if (element === item) {
                            if (element.items.quantity >= element.quantity + 1) {
                                element.quantity = parseInt(element.quantity) + 1;
                                api.changeCartItemQuantity(item.itemId, {quantity: quantityChange})
                            }
                        }
                    })
                } else if (quantityChange === -1) {
                    this.$store.state.cart.cart.forEach((element) => {
                        if (element === item) {
                            if (element.quantity - 1 > 0) {
                                element.quantity = parseInt(element.quantity) - 1;
                                api.changeCartItemQuantity(item.itemId, {quantity: quantityChange})
                            }
                        }
                    })
                } else if (quantityChange > 1) {
                    api.changeCartItemQuantity(item.itemId, {quantity: quantityChange})
                        .then((response) => {
                            // If id of an item is returned, it means that given quantity was biggest than stock quantity
                            if (response.data.id) {
                                this.$store.dispatch('updateQuantity',
                                    {id: response.data.id, quantity: response.data.quantity}
                                )
                            } else {
                                this.$store.dispatch('updateQuantity',
                                    {id: item.itemId, quantity: quantityChange}
                                )
                            }
                        })
                }
            }
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart.cart
        },
        user() {
            return this.$store.state.user.user
        }
    },
}
</script>

<style scoped>

</style>
