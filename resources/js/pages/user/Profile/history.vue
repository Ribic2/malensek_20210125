<template>
    <div>
        <v-card v-if="history.length === 0">
            <h1>Nimate nobenih naročil.</h1>
        </v-card>
        <v-expansion-panels v-else>
            <v-expansion-panel v-for="order in history" :key="order.id">
                <v-expansion-panel-header class="headline">
                    {{ order.UUID }}
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                    <v-row v-for="(item, index) in order.items" :key="index">
                        <v-col>
                            <v-img
                                :aspect-ratio="1"
                                height="100"
                                width="100"
                                :src="`/storage${item.item.itemImgDir}/${item.item.itemImg}`">
                            </v-img>
                        </v-col>
                        <v-col>
                            <v-row>
                                <v-col cols="12"><h4 class="text-center">Ime izdelka</h4></v-col>
                                <v-col cols="12">
                                    <h5 class="text-center">
                                        <router-link :to="{name: 'item', params: {id: item.item.id}}">{{item.item.itemName }}</router-link>
                                    </h5>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col>
                            <v-row>
                                <v-col cols="12"><h4 class="text-center">Cena izdelka</h4></v-col>
                                <v-col cols="12"><h5 class="text-center">{{ item.item.itemPrice }}&euro;</h5></v-col>
                            </v-row>
                        </v-col>
                        <v-col>
                            <v-row>
                                <v-col cols="12"><h4 class="text-center">Naročena količina</h4></v-col>
                                <v-col cols="12"><h5 class="text-center">{{ item.quantity }}</h5></v-col>
                            </v-row>
                        </v-col>
                        <v-col>
                            <v-row>
                                <v-col cols="12"><h4 class="text-center">Skupna cena</h4></v-col>
                                <v-col cols="12"><h5 class="text-center">{{ item.quantity * item.item.itemPrice }}&euro;</h5></v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
import api from "../../../services/api";

export default {
    data() {
        return {
            history: []
        }
    },
    methods: {
        // Gets user order history
        getUserOrders() {
            api.getUserOrderHistory()
                .then((response) => {
                    this.history = response.data
                })
        },
    },
    async mounted() {
        await this.getUserOrders()
    }
}
</script>

