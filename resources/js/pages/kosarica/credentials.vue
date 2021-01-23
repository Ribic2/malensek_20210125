<template>
    <v-container v-if="this.user !== null">
        <v-card
            :elevation="0"
            min-height="600"
        >
            <v-card-actions>
                <register></register>
            </v-card-actions>
        </v-card>
    </v-container>
</template>


<script>
import register from '../kosarica/register'

export default {
    components: {
        register
    },
    computed:{
        user(){
            return this.$store.state.user.user
        }
    }
}
</script>
