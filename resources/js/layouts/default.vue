<template>
    <v-app>
        <!--side bar-->
        <v-navigation-drawer
            v-model="drawer"
            width="300"
            app
            temporary
            disable-resize-watcher
            disable-route-watcher
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Uporabnik
                    </v-list-item-title>
                    <v-divider></v-divider>
                </v-list-item-content>
            </v-list-item>
            <v-list
                dense
                nav
                v-if="this.user.length === 0"
            >
                <v-list-item
                    v-for="link in userLinks" :key="link.label"
                >
                    <v-btn
                        width="100%"
                        :elevation="0"
                        rounded
                        color="#6C3FB8"
                        dark
                        :ripple="false"
                        :to='link.url'>
                        <v-icon>{{ link.icon }}</v-icon>
                        {{ link.label }}
                    </v-btn>
                </v-list-item>
            </v-list>
            <!--If user is registered-->
            <v-list
                dense
                nav
                v-else
            >
                <h5 class="text-center">Dobrodošli {{ this.$store.state.user.user.Name }}
                    {{ this.$store.state.user.user.Surname }}</h5>
                <v-list-item>
                    <v-btn
                        width="100%"
                        rounded
                        color="#6C3FB8"
                        dark
                        :ripple="false"
                        :elevation="0"
                        @click="logout()"
                    >
                        <v-icon>mdi-logout</v-icon>
                        Odjava
                    </v-btn>


                </v-list-item>
                <v-list-item>
                    <v-btn
                        rounded
                        color="#6C3FB8"
                        dark
                        width="100%"
                        to="/reset-password"
                    >Spremeni geslo
                    </v-btn>
                </v-list-item>

                <v-list-item>
                    <v-btn
                        rounded
                        dark
                        width="100%"
                        to="/profile"
                        color="#6C3FB8"
                    >Ogled profila
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- web app -->
        <v-app-bar
            app
            color="#6C3FB8"
            dark
        >
            <v-app-bar-nav-icon>
                <v-img
                    @click="$route.name !== '/' ? $router.push('/') : null"
                    src="/storage/store/FullColor_1280x1024_300dpi.jpg"
                    width="2"
                    height="48"
                    id="logo"
                ></v-img>
            </v-app-bar-nav-icon>
            <v-toolbar-title>
                <v-btn
                    depressed
                    @click="$router.push('/')"
                    color="#6C3FB8"
                    width="auto"
                    :ripple="false"
                >Uniq Cards
                </v-btn>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn
                class="mr-1"
                icon
                @click.stop="drawer = !drawer"
            >
                <v-icon>{{ accountIcon }}</v-icon>
            </v-btn>

            <v-btn
                to="/cart"
                class="mr-1"
                icon>
                <v-badge
                    :content="this.$store.state.cart.cart == null ? '' : this.$store.state.cart.cart.length"
                    :value="this.$store.state.cart.cart == null ? '' : this.$store.state.cart.cart.length"
                    overlap
                >
                    <v-icon>{{ cartIcon }}</v-icon>
                </v-badge>
            </v-btn>
            <template v-slot:extension>
                <v-tabs align-with-title>
                    <v-tab v-for="link in links" v-bind:key="link.label" :to="link.url">{{ link.label }}</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>


        <v-main>
            <SpinnerOverlay></SpinnerOverlay>
            <v-container id="mainContainer">
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer
            color="#6C3FB8"
            padless
        >
            <v-card
                color="#6C3FB8"
                flat
                tile
                width="100%"
                class="text-center"
            >
                <v-card-text>
                    <router-link to="/opodjetju">O podjetju</router-link>
                    <v-spacer></v-spacer>
                    <router-link to="/splosni-pogoji">Splosni pogoji</router-link>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} © <strong>UniqCards</strong>
                </v-card-text>
            </v-card>
        </v-footer>

        <VueCookieAcceptDecline
            :ref="'myPanel1'"
            :elementId="'myPanel1'"
            :debug="false"
            :position="'bottom-left'"
            :type="'floating'"
            :disableDecline="true"
            :transitionName="'slideFromBottom'"
            :showPostponeButton="false">

            <!-- Optional -->
            <div slot="message">
                Ta spletna stran uporablja piškotke.
            </div>

            <!-- Optional -->
            <div slot="acceptContent">
                V redu
            </div>
        </VueCookieAcceptDecline>
    </v-app>
</template>

<script>

import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'
import api from "../services/api";
import {mdiAccountCircle, mdiCart} from '@mdi/js'
import SpinnerOverlay from "../components/spinnerOverlay";

export default {
    components: {
        SpinnerOverlay,
        VueCookieAcceptDecline
    },
    data() {
        return {
            cookieStatus: '',
            links: [
                {label: 'TRGOVINA', url: '/', route: "index"},
                {label: 'KONTAKT', url: '/contact'},
                {label: 'PRILJUBLJENO', url: '/favourites'}
            ],
            userLinks: [
                {label: 'Prijava', icon: 'mdi-login', url: '/login'},
                {label: 'Registracija', icon: 'mdi-account-edit', url: '/register'}
            ],
            drawer: false,
            accountIcon: mdiAccountCircle,
            cartIcon: mdiCart,
        }
    },
    methods: {
        authUser() {
            return this.$store.dispatch('getUser')
        },
        getCart() {
            return this.$store.dispatch('getCart')
        },
        getFavourites() {
            return this.$store.dispatch('getFavourites')
        },
        logout() {
            return this.$store.dispatch('logout')
        },

        getFavouritesGuest() {
            return this.$store.dispatch('getFavoritesGuest')
        },

        getCartGuest() {
            return this.$store.dispatch('getCartGuest')
        },

        setGuest() {
            return this.$store.dispatch('setGuest')
        },

        callDependOnUser() {
            api.getUsersData()
                .then((response) => {
                    this.getFavourites()
                    this.getCart()
                    this.$store.commit('SET_USER_DATA', response.data.user)
                })
                .catch(() => {
                    this.getFavouritesGuest()
                    this.getCartGuest()
                    this.setGuest()
                })
        },
    },
    beforeCreate() {
        api.getUsersData()
            .then((response) => {
                this.getFavourites()
                this.getCart()
                this.$store.commit('SET_USER_DATA', response.data.user)
            })
            .catch((err) => {
                this.getFavouritesGuest()
                this.getCartGuest()
                this.setGuest()
            })
    },

    computed: {
        user() {
            return this.$store.state.user.user
        }
    }
}
</script>

<style scoped>
#logo {
    border-radius: 500px;
}

#mainContainer {
    min-height: 86vh;
}
.v-card__text > a {
    color: white;
}
</style>
