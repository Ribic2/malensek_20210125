<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>Informacije o podjetju</v-card-title>
                    <v-row v-for="(text, index) in legal" :key="index" class="ma-2">
                        <v-col>
                            {{ text.label }}
                        </v-col>
                        <v-col>
                            {{ text.value }}
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "index",
    data(){
        return{
            legal: [
                {label: "Trgovina", value: process.env.MIX_TRGOVINA},
                {label: "Sedež podjetja", value:process.env.MIX_TRGOVINA},
                {label: "Naslov", value: process.env.MIX_TRGOVINA},
                {label: "Proizvodnja", value: process.env.MIX_TRGOVINA}
            ]
        }
    }
}
</script>

<style scoped>

</style>
