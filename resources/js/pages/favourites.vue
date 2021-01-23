<template>
    <v-container>

        <empty v-if="favourites.length === 0" errorText="Nimate nobenega priljubljenega izdelka!"></empty>

        <v-row v-else>
            <v-col
                v-for="product in favourites" v-bind:key="product.id"
                cols="12"
                xl="3"
                lg="6"
                md="6"
            >
                <item v-bind:product="product.items"></item>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import item from './index/Item.vue'
import empty from '../pages/errors/empty'

export default {
    components: {
        empty,
        item,
    },
    data() {
        return {
            overlay: false
        }
    },
    methods: {
        getFavourites() {
            // Check if user is registered or not
            if (this.$store.state.user.user.length === 0) {
                this.$store.dispatch('getFavoritesGuest')
            } else {
                this.$store.dispatch('getFavourites')
            }
        },
    },
    computed: {
        favourites() {
            return this.$store.state.favourites.favourites
        }
    },
    mounted() {
        this.getFavourites()
    }

}
</script>

<style scoped>
    .container{
        min-height: 80vh;
    }
</style>
