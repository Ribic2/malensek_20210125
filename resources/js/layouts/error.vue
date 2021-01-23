<template>
    <v-row justify="center">
        <v-col cols="4">
            <v-card
                elevation="0"
            >
                <v-card-actions>
                    <v-icon
                        size="260"
                        id="icon"
                    >
                        {{ icon }}
                    </v-icon>
                </v-card-actions>
                <h3 class="text-center mt-5">Stran, ki jo iščete ne obstaja</h3>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import {mdiEmoticonSadOutline} from '@mdi/js';

export default {
    data() {
        return {
            icon: mdiEmoticonSadOutline
        }
    }
}
</script>

<style>
#icon{
    margin: 0 auto;
}
</style>
