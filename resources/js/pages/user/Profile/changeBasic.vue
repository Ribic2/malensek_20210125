<template>
    <v-form>
        <v-text-field
            label="Ime"
            :value="name"
            v-model="name"
        >
        </v-text-field>

        <v-text-field
            label="Priimek"
            v-model="surname"
        >
        </v-text-field>

        <v-text-field
            label="Tel. šteilka"
            v-model="phone"
            maxLength="9"
        >
        </v-text-field>

        <v-btn
            width="100%"
            rounded
            color="#6C3FB8"
            dark
            @click="changeBasicInfo()"
        >Spremeni
        </v-btn>
    </v-form>
</template>

<script>
import api from "../../../services/api";

export default {
    props:[
        "user"
    ],
    name: "changeBasic",
    data(){
        return{
            name: this.user.Name,
            surname: this.user.Surname,
            phone: this.user.Telephone
        }
    },
    methods:{
        changeBasicInfo(){
            let data = {
                name: this.name,
                surname: this.surname,
                phone: this.phone,
            }

            api.changeUserDataBasics(data)
                .then((response)=>{
                    console.log(response)
                })
        }
    }
}
</script>

