<template>
    <v-overlay :value="spinner">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
</template>

<script>
export default {
    name: "spinnerOverlay",
    computed:{
        spinner(){
            return this.$store.state.user.spinner;
        }
    }
}
</script>
