<template>
    <v-container>
        <v-row>
            <v-col
            xl="6"
            cols="12">
                <contactus></contactus>
            </v-col>
            <v-col
            xl="6"
            cols="12">
                <description></description>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import contactus from './contactUs.vue'
import description from './description.vue'

export default {
    components:{
        contactus,
        description
    },

}
</script>

<style scoped>

</style>
