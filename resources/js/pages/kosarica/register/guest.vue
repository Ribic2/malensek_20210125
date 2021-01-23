<template>
    <v-form>

        <v-text-field
            placeholder="Ime"
            v-model="name"
        >
        </v-text-field>

        <v-text-field
            placeholder="Priimek"
            v-model="surname"
        >
        </v-text-field>

        <v-text-field
            type="email"
            placeholder="E-pošta"
            v-model="email"
        >
        </v-text-field>

        <v-text-field
            placeholder="Telefonska št."
            v-model="telephone"
        >
        </v-text-field>

        <v-text-field
            placeholder="Hišna št. in ulica"
            v-model="houseNumberAndStreet"
        >
        </v-text-field>

        <v-text-field
            v-model="postcode"
            placeholder="Poštna št."
        >
        </v-text-field>

        <v-btn block @click="createGuest()">Oddaj podatke</v-btn>
    </v-form>
</template>

<script>
import api from "../../../services/api";
export default {
    name: "form.vue",
    data() {
        return {
            name: null,
            surname: null,
            email: null,
            telephone: null,
            houseNumberAndStreet: null,
            postcode: null
        }
    },
    methods: {
        createGuest() {
            let data = {
                "name": this.name,
                "surname": this.surname,
                "email": this.email,
                "houseNumberAndStreet": this.houseNumberAndStreet,
                "Telephone": this.telephone,
                "Postcode": this.postcode
            }

            api.createGuest(data)
            .then((response)=>{
                localStorage.setItem('guest', JSON.stringify(response.data.guest))
                this.$store.state.user.guest = response.data.guest
            })
        }
    },
}
</script>
