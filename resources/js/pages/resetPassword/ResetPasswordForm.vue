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
                    console.log(response)
                })
        }
    }
}
</script>
