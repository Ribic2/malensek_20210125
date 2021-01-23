<template>
    <v-row
        justify="center"
    >
        <v-col
            align-self="center"
            cols="3"
        >
            <v-card>
                <v-card-actions>
                    <v-icon
                        id="icon"
                        size="200"
                        color="green"
                    >
                        {{ check }}
                    </v-icon>
                </v-card-actions>

                <v-card-text class="text-center">Naročilo uspešno oddano!</v-card-text>

                <div class="text-center p-2">
                    <v-btn
                        to="/"
                        rounded
                        color="primary"
                        dark>
                        Vrni se na prvo stran!
                    </v-btn>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import {mdiCheckCircleOutline} from "@mdi/js";

export default {
    name: "success.vue",
    data() {
        return {
            check: mdiCheckCircleOutline
        }
    }
}
</script>

<style scoped>
#icon {
    margin: 0 auto;
}
</style>
