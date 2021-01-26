<template>
    <v-card
        class="rounded-0"
    >
        <v-responsive
            :aspect-ratio="4/3"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="headline">{{ product.itemName }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                    <v-btn
                        @click="addToFavourites(product)"
                        icon
                    >
                        <v-icon
                        :color="this.$store.getters.setFavourites(product.id) ? 'blue': null"
                        >{{ starIcon }}</v-icon>
                    </v-btn>
                </v-list-item-avatar>
            </v-list-item>

            <!-- Back side of the website-->
            <v-responsive :aspect-ratio="4/3" v-if="selected != null" class="ma-2" @click="selectItem(product.id)">
                <transition name="fade" mode="out-in">
                    <v-card-text>{{ product.itemDescription.substring(0,400)+".." }}</v-card-text>
                </transition>
                <v-card-text>Cena &euro;{{ product.itemPrice }}</v-card-text>
            </v-responsive>

            <!-- Front page of the website -->
            <v-img
                v-else
                @click="selectItem(product.id)"
                class="ma-2"
                :aspect-ratio="4/3"
                :src="`/storage${product.itemImgDir}/${product.itemImg}`"
            ></v-img>

            <v-card-actions>
                <v-btn
                    v-if="product.quantity > 0 && !$store.getters.setCart(product.id)"
                    @click="addToCart(product)"
                    block
                    rounded
                    class="font-weight-medium"
                    color="#6C3FB8"
                    dark
                    elevation="0"
                    :ripple="false"
                >V košarico
                </v-btn>

                <v-btn
                    v-if="product.quantity > 0 && $store.getters.setCart(product.id)"
                    @click="addToCart(product)"
                    block
                    rounded
                    class="font-weight-medium"
                    color="#6C3FB8"
                    dark
                    elevation="0"
                    :ripple="false"
                >Izdelek je že v košarici
                </v-btn>
                <v-btn
                    v-else
                    block
                    disabled
                    class="font-weight-medium"
                    elevation="0"
                    :ripple="false"
                >Izdelek ni na voljo
                </v-btn>

            </v-card-actions>
            <p
                class="text-center learnMoreText"
                @click="$router.push(`/item/${product.id}`)"
            >
                Več o izdelku...
            </p>
        </v-responsive>
    </v-card>
</template>

<script>
import {mdiStar} from '@mdi/js'

export default {
    props: [
        'product'
    ],
    data() {
        return {
            selected: null,
            inCart: false,
            starIcon: mdiStar
        }
    },

    methods: {
        /**
         * Adds product to cart
         */
        addToCart(product) {
            // If user is not registered, if not it will call function for guest
            // otherwise it will call function to add item to cart for logged in user
            if (this.$store.state.user.user.length === 0) {
                let data = {
                    items: product,
                    quantity: 1
                }
                return this.$store.dispatch('addItemToCartGuest', data)
            } else {
                let data = {
                    id: product.id,
                    quantity: 1
                }
                return this.$store.dispatch('addItemToCart', data)
            }
        },
        /**
         * When item is clicked it gets redirected to /item/:id.
         * On that page it displays all the item information.
         */
        redirectToItemPage(e) {
            this.$router.push({path: `/item/${e.itemId}`})
        },

        /**
         * Sends request to Vuex that will store newly added favourite item
         * @param {OBJECT} e
         */
        addToFavourites(e) {
            if (this.$store.state.user.user.length === 0) {
                this.$store.dispatch('addToFavouritesGuest', e)
            } else {
                this.$store.dispatch('addToFavourites', e.id)
            }
        },
        selectItem(e) {
            this.selected = this.selected == null ? e : null
        },
    },
}
</script>

<style>
    .learnMoreText:hover{
        cursor: pointer;
    }
</style>
