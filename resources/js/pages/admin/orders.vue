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
                    <v-simple-table>
                        <thead>
                        <tr>
                            <th>Id izdelka</th>
                            <th>Ime izdelka</th>
                            <th>Cena izdelka</th>
                            <th>Količina naročila</th>
                            <th>Celotna cena</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="(item, index) in items.items" :key="index">
                            <td>{{ item.item.id }}</td>
                            <td>{{ item.item.itemName }}</td>
                            <td>{{ item.item.itemPrice }}</td>
                            <td>{{ item.quantity }}</td>
                            <td>{{ item.quantity * item.item.itemPrice }}</td>
                        </tr>
                        </tbody>
                    </v-simple-table>

                    <v-card-actions>
                        <v-btn @click="confirmOrder(items.id)">Potrdi</v-btn>
                        <v-btn @click="denyOrder(items.id)">Zavrni</v-btn>
                        <v-btn @click="delayOrder(items.id)">Zamik v dostavi</v-btn>
                    </v-card-actions>
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
            api.complete(id)
            .then(()=>{
                this.complete()
            })
        },
        denyOrder(id) {
            api.deny(id)
            .then(()=>{
                this.complete()
            })
        },

        delayOrder(id){
            api.delay(id)
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
        this.getOrders()
    }
}
</script>
