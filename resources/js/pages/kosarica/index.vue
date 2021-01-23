<template>
    <v-container fluid>
        <v-stepper v-model="counter">
            <!--Header -->
            <v-stepper-header>
                <v-stepper-step :complete="counter > 1" step="1">Košarica</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="counter > 2" step="2">Naslov</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">Način dostave in plačila</v-stepper-step>
            </v-stepper-header>
            <!--Content-->

            <v-stepper-items>
                <v-stepper-content
                    step="1">
                    <v-card
                        class="mb-12"
                        elevation="0"
                        min-height="60vh"
                    >
                        <items></items>
                    </v-card>

                    <v-btn
                        v-if="cart.length > 0"
                        class="float-right"
                        color="primary"
                        v-on:click="checkUser() ? counter = 3 : counter = 2"
                    >
                        Nadaljuj
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-card
                        class="mb-12"
                        min-height="60vh"
                        elevation="0"
                    >
                        <credentials></credentials>
                    </v-card>
                    <v-btn
                        @click="counter=1"
                    >Nazaj
                    </v-btn>

                    <v-btn
                        class="float-right"
                        @click="redirectToFrontPage()"
                        text
                    >Prekini
                    </v-btn>
                    <v-btn
                        v-if="checkUser()"
                        class="float-right"
                        color="primary"
                        @click="counter = 3"
                    >
                        Nadaljuj
                    </v-btn>


                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card
                        class="mb-12"
                        :elevation="0"
                        min-height="60vh"
                    >
                        <paymentMethod></paymentMethod>
                    </v-card>
                    <v-btn
                        v-on:click="checkUser()  ? counter = 1 : counter = 2"
                    >Nazaj
                    </v-btn>

                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>


        <!--Dialog that will be shown if action was successfully completed-->
        <v-dialog
            width="400"
            v-model="dialog">

            <v-card>
                <div id="iconHolder">
                    <v-icon
                        size="250"
                        color="green"
                    >mdi-checkbox-marked-circle-outline
                    </v-icon>
                </div>
                <v-card-text id="cardText">Oddaja uspešno oddana!</v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>

import items from '../kosarica/items.vue'
import credentials from '../kosarica/credentials.vue'
import paymentMethod from '../kosarica/paymentMethod.vue'

export default {
    components: {
        items,
        credentials,
        paymentMethod,
    },
    data() {
        return {
            counter: 1,
            check: '',
            dialog: false,
            isGuest: ''
        }
    },
    methods: {
        redirectToFrontPage() {
            this.$router.push({name: 'index'})
        },
        // Checks if user is authenticated (confirmed his mail) and if it is new customer (first order)
        checkUser(){
            if(this.user === null){
                return false
            }
        //&& this.user.isNewCustomer === false && this.user.length > 0
            else if(this.user.isAuth && this.user.isNewCustomer === 0 && this.user.length !== null){
                return true
            }
            else if(this.guest !== null && this.guest.isNewCustomer === 0 && this.guest.isAuth){
                return true
            }
            return false
        }
    },
    computed:{
        user(){
            return this.$store.state.user.user
        },
        cart(){
            return this.$store.state.cart.cart
        },
        guest(){
            return this.$store.state.user.guest
        }
    }
}
</script>

<style scoped>

</style>
