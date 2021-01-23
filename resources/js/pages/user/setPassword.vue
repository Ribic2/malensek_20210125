<template>
    <v-card
        width="500"
        class="mx-auto mt-12"
    >
        <v-card-title>Nastavi geslo</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="password"
                    @change="checkPassword()"
                    placeholder="Geslo"
                ></v-text-field>

                <v-text-field
                    v-model="passwordRepeat"
                    @change="checkPassword()"
                    placeholder="Ponovno vpiši geslo"
                ></v-text-field>

                <v-btn
                    block
                    @click="setPassword"
                    color="success"
                >Nastavi</v-btn>
            </v-form>
            <v-alert type="error" v-if="message" class="mt-2">
                {{ message }}
            </v-alert>
        </v-card-text>
    </v-card>
</template>

<script>
import api from "../../services/api";

export default {
    name: "setPassword",
    data(){
        return{
            password: '',
            passwordRepeat: '',
            message: '',
            status: false
        }
    },
    methods:{
        checkPassword(){
            if(this.password !== this.passwordRepeat){
                this.message = "Gesli se ne ujemata!"
            }
            else{
                this.message = null
                this.status = true
            }
        },
        setPassword(){
            console.log(this.$route.params)
            let data = {
                "password": this.password,
                "token": this.$route.query.token
            }
            if(this.status){
                api.setPassword(data)
                .then((response)=>{
                    localStorage.setItem('authToken', response.data.token)
                })
                .then(()=>{
                    window.location.href = "/"
                })
            }
        }
    }
}
</script>
