<template>
    <v-container>
        <v-card
            class="mx-auto mt-12"
            width="500"
            height="500"
            :elevation="$vuetify.breakpoint.smAndDown ? 0 : 5"
        >
            <v-card-title>
                Prijava
            </v-card-title>

            <v-card-text>
                <v-form>
                    <v-text-field
                        label="E-naslov"
                        v-model="email"
                        :prepend-icon="mdiEmail"
                    ></v-text-field>

                    <v-text-field
                        label="Geslo"
                        v-model="password"
                        :type="showPassword ? 'text' : 'password'"
                        :append-icon="showPassword ? this.mdiEye: this.mdiEyeOff"
                        @click:append="showPassword = !showPassword"
                        :prepend-icon="this.mdiLock"
                    ></v-text-field>
                    <v-card-actions>
                        <v-btn
                            width="100%"
                            rounded
                            color="#6C3FB8"
                            dark
                            @click="login"
                        >Prijavi se
                        </v-btn>
                    </v-card-actions>
                </v-form>
                <p class="text-center mt-2">
                    <router-link to="/reset-password">Ali ste pozabili geslo?</router-link>
                </p>


                <v-alert type="error" v-if="response">
                    <p v-if="response.message != null">
                        {{ response.message }}
                    </p>
                    <div v-if="response.errors != null">
                        <p v-for="(errors, index) in response.errors.email" :key="index">
                            {{ errors }}
                        </p>
                    </div>
                </v-alert>

            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import api from "../../services/api";
import {mdiLock, mdiEye, mdiEyeOff, mdiEmail} from '@mdi/js'

export default {
    data() {
        return {
            showPassword: false,
            email: '',
            password: '',
            response: null,
            mdiLock, mdiEye, mdiEyeOff, mdiEmail
        }
    },
    methods: {
        async login() {
            this.$store.state.user.spinner = true
            await api.login(this.email, this.password)
                .then((response) => {
                    // Stores token to local storage and stores users data to vuex state
                    localStorage.setItem('authToken', response.data.access_token)
                    this.$store.commit('SET_USER_DATA', response.data.user)
                }).then(() => {
                    this.$store.state.user.spinner = false
                    document.location.href = "/";
                })
                .catch((err) => {
                    this.$store.state.user.spinner = false
                    this.response = err.response.data
                })

        },
    },
}
</script>


