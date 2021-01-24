<template>
    <v-card
        class="mx-auto mt-12"
        width="500"
        height="500"
    >
        <v-card-title>Spremeni geslo</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field placeholder="Email" type="email" v-model="email"/>
                <v-text-field placeholder="Novo geslo" type="password" v-model="newPassword"/>
                <v-text-field placeholder="Ponovno novo geslo" type="password" v-model="newPasswordAgain"/>

                <v-btn block color="primary" @click="resetPasswordRequest">
                    Spremeni geslo
                </v-btn>
            </v-form>

            <v-alert
                class="mt-3"
                v-if="message"
                :type="is_error ? 'error' : 'success'"
            >
                <div v-if="message.email != null">
                    <p v-for="message in message.email">
                        {{ message }}
                    </p>
                </div>

                <div v-if="message.password != null">
                    <p v-for="message in message.password">
                        {{ message }}
                    </p>
                </div>

                <p v-if="!is_error">
                    {{ message }}
                </p>
            </v-alert>
        </v-card-text>
    </v-card>
</template>
<script>
import api from "../../services/api";

export default {
    data() {
        return {
            token: null,
            email: null,
            newPassword: null,
            newPasswordAgain: null,
            message: null,
            is_error: null
        }
    },
    methods: {
        resetPasswordRequest() {
            let data = {
                token: this.$route.params.token,
                email: this.email,
                password: this.newPassword,
                password_confirmation: this.newPasswordAgain
            }

            api.resetPassword(data)
                .then((response) => {
                    this.is_error = false
                    this.message = response.data.message
                })
                .catch((err)=>{
                    this.is_error = true
                    this.message = err.response.data.errors
                })
        }
    }
}
</script>
