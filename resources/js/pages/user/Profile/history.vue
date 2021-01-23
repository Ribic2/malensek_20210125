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
                            Ime izdelka {{ item.item.itemName }}
                        </v-col>
                        <v-col>
                            Cena izdelka {{ item.item.itemPrice }}
                        </v-col>
                        <v-col>
                            Naročena količina {{ item.quantity }}
                        </v-col>
                        <v-col>
                            Skupna cena izdelka in količine {{ item.quantity * item.item.itemPrice }}
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

