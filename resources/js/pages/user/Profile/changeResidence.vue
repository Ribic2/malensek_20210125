<template>
    <v-form>
        <v-text-field
            v-model="houseNumberAndStreet"
            label="Hišna številka in ulica"
        >
        </v-text-field>

        <v-text-field
            label="Poštna številka"
            v-model="postcode"
            maxLength="4"
        >
        </v-text-field>

        <v-btn
            width="100%"
            rounded
            color="#6C3FB8"
            dark
            @click="changeResidenceInfo()"
        >Spremeni
        </v-btn>
    </v-form>
</template>

<script>
import api from "../../../services/api";

export default {
    props: [
        "user"
    ],
    data() {
        return {
            postcode: this.user.Postcode,
            houseNumberAndStreet: this.user.houseNumberAndStreet,
        }
    },
    name: "changeResidence",
    methods: {
        changeResidenceInfo() {
            let data = {
                postcode: this.postcode,
                houseNumberAndStreet: this.houseNumberAndStreet,
            }

            api.changeUserDataResidence(data)
                .then((response) => {
                    console.log(response)
                })

        }
    }
}
</script>
