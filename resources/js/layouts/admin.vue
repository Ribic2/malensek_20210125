<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>Urejevalnik</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle
                class="float-right"
                borderless
                group
            >
                <v-btn
                    icon
                    v-for="button in buttons" :key="button.id"
                    :to="button.link"
                >
                    <v-icon>{{ button.icon }}</v-icon>
                </v-btn>
            </v-btn-toggle>
        </v-app-bar>

        <v-main>
            <SpinnerOverlay></SpinnerOverlay>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>

        </v-footer>
    </v-app>
</template>

<script>

import {mdiCardBulletedOutline, mdiOrderNumericAscending, mdiAccount, mdiContacts} from '@mdi/js'
import SpinnerOverlay from "../components/spinnerOverlay";
import api from "../services/api";

export default {
    components: {SpinnerOverlay},
    data() {
        return {
            buttons: [
                {id: 1, icon: mdiCardBulletedOutline, link: '/admin'},
                {id: 2, icon: mdiOrderNumericAscending, link: '/admin/orders'},
                {id: 3, icon: mdiAccount, link: '/admin/users'},
                {id: 4, icon: mdiContacts, link: '/admin/contacts'}
            ]
        }
    },
    mounted() {
        api.getUsersData()
            .then((response) => {
                console.log(response)
                this.$store.commit('SET_USER_DATA', response.data.user)
            })
    }
}
</script>

