<template>
    <v-row>
        <v-col
        cols="12"
        >
            <v-card
                color="#6C3FB8"
                dark
            >
                <v-card-actions>
                    <v-card-title>Trgovina</v-card-title>
                    <v-btn
                        v-if="categories.length !== 0"
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? filterEnabled : filterDisabled }}</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-expand-transition v-if="categories.length > 0">
                    <div v-show="show">

                        <div>
                            <v-btn
                                rounded
                                color="#6C3FB8"
                                elevation="0"
                                class="ma-2"
                                @click="selectAllItemsCategory"
                            >
                                Vsi izdelki
                            </v-btn>
                            <v-btn
                                rounded
                                class="ma-2"
                                v-for="(category, index) in categories" v-bind:key="index"
                                color="#6C3FB8"
                                elevation="0"
                                @click="selectSelectedItems(category.categories)"
                            >
                                {{ category.categories }}
                            </v-btn>
                        </div>
                    </div>
                </v-expand-transition>
            </v-card>
            <v-row>

                <v-col
                    v-for="item in items"
                    :key="item.id"
                    xl="3"
                    lg="4"
                    md="6"
                    sm="12"
                    cols="12"
                >
                    <item
                        v-bind:product="item"
                    ></item>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import item from './Item.vue'
import api from "../../services/api";
import {mdiChevronUp, mdiChevronDown} from '@mdi/js'

export default {
    components: {
        item
    },
    data() {
        return {
            show: false,
            categories: [],
            selectedItem: null,

            filterEnabled: mdiChevronDown,
            filterDisabled: mdiChevronUp
        }
    },
    methods: {
        /**
         *  Gets all categories
         */
        getCategories() {
            api.getCategories()
            .then((response)=>{
                this.categories = response.data
            })
        },

        /**
         *  Calls all items when page is loaded or vuex state is empty
         */
        selectAllItems(){
            if(this.items.length === 0){
                api.getItemsCustomer()
                    .then((response)=>{
                        this.$store.dispatch('addToItems', response.data)
                    })
            }
        },

        /**
         * Method is used for calling all items, it set on a button
         */
        selectAllItemsCategory(){
            api.getItemsCustomer()
                .then((response)=>{
                    this.$store.dispatch('addToItems', response.data)
                })
        },

        selectSelectedItems(category){

            let data = {
                category: category
            }
           api.getSpecificItems(data)
            .then((response)=>{
                this.$store.dispatch('addToItems', response.data)
            })
        },

        /**
         * Selects specific items from specific category
         */
    },
    computed:{
        items(){
            return this.$store.state.products.items
        }
    },
    mounted() {
        this.getCategories(),
            this.selectAllItems()
    }
}
</script>
