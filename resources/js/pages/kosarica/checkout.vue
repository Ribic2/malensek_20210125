<template>
    <v-container>
        <v-card
        id = "checout"
        width="500"
        height="500"
        >
            <h1 class="headline text-center pt-5 underline">Oddaja je bila potrjena!</h1>
            <blockquote class="blockquote">
            Vaše naročili je bilo uspešno oddano. Na vaš e-naslov boste
            dobili potrditev o oddaji. Nekaj dni pred prejemom vam bomo poslali
            e-pošto.
            </blockquote>

            <v-btn
            color="primary"
            id="goBackButton"
            width="90%"
            @click="redirectToFrontPage()"
            >
            Vrni se na prvo stran
            </v-btn>
        </v-card>
    </v-container>
</template>

<script>
import route from '../../routes/router'
export default {
    methods:{
        redirectToFrontPage(){
            route.push({name: 'index'})
        }
    }
}
</script>

<style scoped>
    #checout{
        margin: 0 auto;
        position: relative;
        top: 100px;
    }
    #goBackButton{
        display: block;
        margin: 0 auto;
    }
</style>
