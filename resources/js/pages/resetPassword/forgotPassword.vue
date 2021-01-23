<template>

    <v-card
        class="mx-auto mt-12"
        width="500"
        :elevation="$vuetify.breakpoint.smAndDown ? 0 : 5"
    >
        <v-card-title>Spremeni geslo</v-card-title>

        <v-card-text>
            <v-text-field
                type="email"
                placeholder="e-naslov"
                v-model="email"
                :prepend-icon="mdiEmail"
                required
            ></v-text-field>

            <v-btn
                @click="requestResetPassword"
                block
                rounded
                color="#6C3FB8"
                dark
            >Spremeni geslo
            </v-btn>

            <v-alert
                :type="has_error ? 'error' : 'success'"
                v-if="message"
                class="mt-3"
                rounded
            >
                {{ message }}
            </v-alert>
        </v-card-text>
    </v-card>

</template>

<script>
import api from "../../services/api";
import {mdiEmail} from '@mdi/js'

export default {
    data() {
        return {
            email: null,
            has_error: null,
            message: null,
            mdiEmail
        }
    },
    methods: {
        async requestResetPassword() {
            this.$store.state.user.spinner = true
            await api.requestResetPassword({email: this.email})
                .then((response) => {
                    this.has_error = false
                    this.message = response.data.message
                    this.$store.state.user.spinner = false
                })
                .catch((err)=>{
                    this.has_error = true
                    this.message = err.response.data.message
                    this.$store.state.user.spinner = false
                })
        }
    }
}
</script>
