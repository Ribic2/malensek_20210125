<template>
    <v-dialog
        v-model="$store.state.admin.deleteItemDialog"
        width="500"
    >
        <v-card>
            <v-card-title>Izbriši izdelek</v-card-title>
            <v-card-title>Ali ste prepričani da želite izbrisati izdelek?</v-card-title>

            <v-card-actions>
                <v-btn @click="cancel">Prekliči</v-btn>
                <v-btn @click="deleteItem" color="red" dark>Izbriši</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import api from "../../../services/api";
export default {
    methods:{
        deleteItem(){
            this.$store.state.spinner = true
            api.deleteItem(this.$store.state.deleteItemId)
            .then((response)=>{
                this.$store.state.spinner = false
                this.$store.commit('TOGGLE_DELETE', false)

                this.$store.state.admin.responseText = "Izdelek je bil uspešno izbrisan!"
                this.$store.state.admin.responseType = true
                this.$store.state.admin.responseStatus = true

                this.$store.dispatch('getItems')
            })
            .catch((err)=>{
                this.$store.commit('TOGGLE_DELETE', false)
                this.$store.state.admin.responseText = "Izdelka ni bilo mogoče izbrisati"
                this.$store.state.admin.responseType = false
                this.$store.state.admin.responseStatus = true
            })
        },
        cancel(){
            this.$store.commit('TOGGLE_DELETE', false)
        }
    }
}
</script>

<style scoped>

</style>
