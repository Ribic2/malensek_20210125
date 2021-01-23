<template>
    <v-container>
        <v-dialog
            v-model="error"
            width="500"
        >
            <v-card>
                <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                >
                    Napaka
                </v-card-title>


                <v-card-text>
                    Nekateri podatki manjkajo!
                </v-card-text>


                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="error = false"
                    >
                        Ok
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <v-row>
            <v-col
                cols="12"
                xl="6"
            >
                <v-card>
                    <v-card-title>
                        Informacije u uporabniku
                    </v-card-title>

                    <div v-if="user != null">
                        <v-card-text>
                            <span class="font-weight-black">Ime in priimek: </span> {{ user.Name }} {{ user.Surname }}
                        </v-card-text>

                        <v-card-text>
                            <span class="font-weight-black">Telefonska: </span> {{ user.Telephone }}
                        </v-card-text>

                        <v-card-text>
                            <span class="font-weight-black">Email: </span> {{ user.email }}
                        </v-card-text>
                    </div>

                </v-card>
            </v-col>

            <v-col
                cols="12"
                xl="6"
            >
                <v-card
                    height="auto"
                >
                    <v-expansion-panels>
                        <v-expansion-panel v-if="!this.user.isNewCustomer">
                            <v-expansion-panel-header>Spremeni naslov dostave</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <change-residence :user="$store.state.user.user"></change-residence>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>Spremeni osnovne podatke</v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <change-basic :user="$store.state.user.user"></change-basic>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col
                cols="12"
            >
                <history></history>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import history from './Profile/history.vue'
import changeBasic from "./Profile/changeBasic";
import changeResidence from "./Profile/changeResidence";

export default {
    components: {
        history,
        changeBasic,
        changeResidence
    },
    data() {
        return {
            error: false
        }
    },
    computed: {
        user() {
            return this.$store.state.user.user
        }
    }
}
</script>

<style scoped>

</style>
