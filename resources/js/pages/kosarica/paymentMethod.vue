<template>
    <v-container>

        <v-overlay :value="spinner">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <v-row>
            <v-col
                cols="12"
                xl="7"
                lg="7"
                md="7"
            >
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

                        <v-col
                            cols="12"
                            xl=2
                            lg="2"
                        >
                            <p class="title">Količina</p>
                            <p class="headline">{{ item.quantity }}</p>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col
                cols="12"
                xl="5"
                lg="5"
                md="5"
            >
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Plačaj ob prevzemu</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-btn @click="pay">Plačaj ob prevzetju</v-btn>
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                        <v-expansion-panel-header>Plačaj z kreditno kartico ali z PayPal</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <pay-pal></pay-pal>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import PayPal from './paypal'

export default {
    data() {
        return {
            complete: false,
            spinner: false,
            payWhenDeliverd: false,
        }
    },
    components: {
        PayPal
    },
    methods: {
        pay() {
            this.$store.commit('TOGGLE_SPINNER', true)
            return fetch('/api/execute-payment', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json, text-plain, */*",
                },
                body: JSON.stringify({
                    token: this.user.token,
                    cart: this.cart,
                    typeOfPayment: 'whenDelivered'
                })
            }).then((res) => {
                localStorage.removeItem('cart')
                this.$store.commit('ADD_DATA_TO_CART', [])
            }).then(() => {
                this.$store.commit('TOGGLE_SPINNER', false)
                this.$router.push('/success')
            })
        }
    },
    computed: {
        // Checks if user ordering is either guest or logged in user
        user() {
            return this.$store.state.user.user.length === 0 ? this.$store.state.user.guest : this.$store.state.user.user
        },
        cart() {
            return this.$store.state.cart.cart
        }
    },
}
</script>

<style>

</style>

