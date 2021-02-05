<template>
    <v-container fluid>
        <v-row>
            <v-col
                cols="12"
                lg="4"
                md="6"
                xl="3"
                v-for="user in users" :key="user.id">
                <v-card
                    height="500"
                >
                    <h1 class="headline text-center pt-4">{{ user.id }}. {{ user.Name }} {{ user.Surname }}</h1>
                    <v-divider></v-divider>

                    <v-card-text>
                        <p><span class="font-weight-bold">E-naslov: </span>{{ user.email }}</p>
                        <p><span class="font-weight-bold">Telefon: </span>{{ user.Telephone }}</p>
                        <p><span class="font-weight-bold">Hišna številka: </span>{{ user.houseNumberAndStreet }}
                            {{ user.Postcode }}</p>
                        <p v-if="user.roles.length > 0">
                            Uporabnik je administrator.
                        </p>

                        <p v-if="user.isAuth">
                            Uporabnik je potrdil svoj e-naslov.
                        </p>

                        <p v-if="user.isNewCustomer">
                            Je nov uporabnik.
                        </p>

                        <p v-if="user.isGuest">
                            Uporabnik je guest
                        </p>

                        <v-divider></v-divider>
                    </v-card-text>

                    <div v-if="userData.id !== user.id">
                        <v-card-text>
                            <v-btn
                                block
                                @click="deleteUser(user.id)"
                            >Izbriši uporabnika
                            </v-btn>
                            <v-btn
                                block
                                v-if="user.roles.length === 0"
                                @click="changeUsersRoleToAdmin(user.id)"
                            >Dodeli administrator
                            </v-btn>

                            <v-btn
                                block
                                v-else
                                @click="changeUsersRoleToAdmin(user.id)"
                            >Odstrani administratorja
                            </v-btn>
                        </v-card-text>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from "../../services/api";

export default {
    data() {
        return {
            users: null
        }
    },
    methods: {
        /**
         *  Gets all users
         */
        getAllUsers() {
            api.getAllUsers()
                .then((response) => {
                    this.users = response.data
                })
        },
        /**
         * Deletes user
         * @param id
         */
        deleteUser(id) {
            api.deleteUser(id)
                .then(() => {
                    this.getAllUsers()
                })
        },

        /**
         * Sets role to admin role
         * @param id
         */
        changeUsersRoleToAdmin(id) {
            api.changeUserAdminStatus(id)
                .then(() => {
                    this.getAllUsers()
                })

        }
    },
    mounted() {
        this.getAllUsers()
    },
    computed: {
        userData() {
            return this.$store.state.user.user
        }
    }
}
</script>
