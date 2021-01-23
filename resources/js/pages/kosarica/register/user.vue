<template>
    <v-form>
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

        <v-btn @click="updateCredentials">
            Oddaj podatke
        </v-btn>
    </v-form>
</template>

<script>
import api from "../../../services/api";

export default {
    name: "user",
    data(){
        return{
            houseNumberAndStreet: null,
            postcode: null
        }
    },
    methods:{
        updateCredentials(){
            let data = {
                "houseNumberAndStreet": this.houseNumberAndStreet,
                "postcode": this.postcode,
            }

            api.updateCredentials(data)
            .then((response)=>{
                this.$store.commit('SET_USER_DATA', response.data)
            })
        }
    }
}
</script>

<style scoped>

</style>
