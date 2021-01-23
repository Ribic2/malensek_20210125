<template>
    <v-container>
        <v-card
            elevation="0"
            width="500"
        >
            <v-card-title>Podatki o dostavi</v-card-title>

            <v-card-actions>
                <!-- Check if user is guest -->
                <guest v-if="user.length === 0 || !user.isAuth"></guest>

                <!-- if user is authenticated -->
                <user v-else></user>
            </v-card-actions>

            <v-card-text class="text-center">
                Ali ste že registrirani? <a class="blue--text" @click="$router.push('/login')">Prijavite se</a>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import guest from './register/guest'
import user from './register/user'

export default {
    components: {
        user,
        guest
    },
    computed:{
        user(){
            return this.$store.state.user.user
        }
    }
}
</script>
