<template>
    <v-container fluid>

        <v-app-bar>
            <v-toolbar-title>Naročila</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle>
                <v-btn v-for="(button, index) in Buttons" :key="index" @click="button.function()">
                    <v-icon>{{ button.icon }}</v-icon>
                </v-btn>
            </v-btn-toggle>
        </v-app-bar>

        <v-row v-if="data.length === 0">
            <empty error-text="Ni nobenih naročil!"></empty>
        </v-row>

        <v-row v-else>
            <v-col
                v-for="(items, index) in data"
                :key="index"
                cols="12"
                xl="4"
                lg="4"
                md="6"
            >
                <v-card
                    min-height="500px"
                >
                   <v-card-title>{{ items.UUID }}</v-card-title>
                  <v-card-text>
                        <span class="font-weight-bold">Ime in priimek: </span>
                        {{ items.user.Name}}
                        {{ items.user.Surname }}
                    </v-card-text>

                    <v-card-text>
                        <span class="font-weight-bold">Email: </span> {{ items.user.email }}
                    </v-card-text>

                    <v-card-text>
                        <span class="font-weight-bold">Telefon: </span> {{ items.user.Telephone }}
                    </v-card-text>
                    <v-card-text><span class="font-weight-bold">Naslov:</span>
                        {{ items.user.houseNumberAndStreet }} {{ items.user.Postcode }}
                    </v-card-text>

                    <!-- Items data -->
                    <v-simple-table height="250px">
                        <thead>
                        <tr>
                            <th>Id izdelka</th>
                            <th>Ime izdelka</th>
                            <th>Cena izdelka</th>
                            <th>Količina naročila</th>
                            <th>Skupna cena</th>
                            <th>Info o izdelku</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="(item, index) in items.items" :key="index">
                            <td>{{ item.item.id }}</td>
                            <td>{{ item.item.itemName }}</td>
                            <td>{{ item.item.itemPrice }}&euro;</td>
                            <td>{{ item.quantity }}</td>
                            <td>{{ item.quantity * item.item.itemPrice }}&euro;</td>
                            <td>
                                <v-btn
                                    @click="$router.push({name: 'item', params:{id: item.item.id}})">
                                    Izdelek
                                </v-btn>
                            </td>
                        </tr>
                        </tbody>
                    </v-simple-table>
                    <v-divider></v-divider>
                    <v-card-actions v-if="items.status === 'not-reviewed' || items.status === 'delayed'">
                        <v-btn @click="confirmOrder(items.id)">Potrdi</v-btn>
                        <v-btn @click="denyOrder(items.id)">Zavrni</v-btn>
                        <v-btn @click="delayOrder(items.id)" v-if="items.status !== 'delayed'">Zamik v dostavi</v-btn>
                        <v-btn v-else-if="items.status === 'delayed'">Dostava zamaknjena</v-btn>
                    </v-card-actions>

                    <v-card-title v-else>
                        Paket je bil že potrjen!
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from '../../services/api'
import empty from "../errors/empty";
import {mdiFilterVariantPlus, mdiFilterVariantMinus, mdiCheck, mdiClose, mdiAllInclusive} from '@mdi/js'

export default {
    components:{
      empty
    },
    data() {
        return {
            data: [],
            Buttons: [
                {icon: mdiFilterVariantPlus, function: () => this.latest()},
                {icon: mdiFilterVariantMinus, function: () => this.oldest()},
                {icon: mdiCheck, function: () => this.complete()},
                {icon: mdiClose, function: () => this.notComplete()},
                {icon: mdiAllInclusive, function: () => this.getOrders()},
            ]
        }
    },
    methods: {
        /**
         * Gets all orders
         */
        getOrders() {
            api.getOrders()
                .then((response) => {
                    this.data = response.data
                })
        },
        confirmOrder(id) {
            this.$store.commit('TOGGLE_SPINNER', true)
            api.complete(id)
            .then(()=>{
                this.notComplete()
                this.$store.commit('TOGGLE_SPINNER', false)
            })
        },
        denyOrder(id) {
            this.$store.commit('TOGGLE_SPINNER', true)
            api.deny(id)
            .then(()=>{
                this.notComplete()
                this.$store.commit('TOGGLE_SPINNER', false)
            })
        },

        delayOrder(id){
            this.$store.commit('TOGGLE_SPINNER', true)
            api.delay(id)
            .then(()=>{
                this.notComplete()
                this.$store.commit('TOGGLE_SPINNER', false)
            })
        },

        // Filter
        latest() {
            api.latestOrders()
                .then((response) => {
                    this.data = response.data
                })
        },
        oldest() {
            api.oldestOrders()
                .then((response) => {
                    this.data = response.data
                })
        },
        complete() {
            api.completeOrders()
                .then((response) => {
                    this.data = response.data
                })
        },
        notComplete() {
            api.notCompleteOrders()
                .then((response) => {
                    this.data = response.data
                })
        },
    },
    mounted() {
        this.notComplete()
    }
}
</script>
