<template>
    <v-container>
        <v-row v-if="favourites.length !== 0">
            <v-col
                cols="12"
                xl="3"
                lg="6"
                md="6"
                v-for="(productItem, index) in favourites"
                v-bind:key="index"
            >
                <item
                    v-if="user.length === 0"
                    v-bind:product="productItem"
                ></item>

                <item
                    v-else
                    v-bind:product="productItem.items"
                ></item>
            </v-col>
        </v-row>

        <empty v-else errorText="Nimate nobenega priljubljenega izdelka!"></empty>
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
            overlay: false,
        }
    },
    methods: {
        getFavourites() {
            if (this.user.length === 0) {
               this.$store.dispatch('getFavoritesGuest')
            } else {
                this.$store.dispatch('getFavourites')
            }
        }
    },
    mounted() {
        this.getFavourites()
    },
    computed: {
        user() {
            return this.$store.state.user.user
        },
        favourites(){
            return this.$store.state.favourites.favourites
        }
    },
}
</script>

<style scoped>
.container {
    min-height: 80vh;
}
</style>
