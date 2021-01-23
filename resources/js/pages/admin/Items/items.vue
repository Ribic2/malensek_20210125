<template>
    <v-container fluid>
        <v-app-bar>
            <v-toolbar-title>Izdelki</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
                class="mt-7"
                label="Išči izdelke"
                type="text"
                v-model="search"
                @keyup="searchItem()"
                solo
            ></v-text-field>

        </v-app-bar>

        <v-app-bar>
            <v-btn-toggle>
                <v-btn v-for="(button, index) in Buttons"
                       :key="index"
                       @click="button.functions"
                >
                    <v-icon>{{ button.icon }}</v-icon>
                </v-btn>
            </v-btn-toggle>
        </v-app-bar>

        <v-divider></v-divider>
        <v-expansion-panels>
            <v-expansion-panel
                v-for="item in items"
                v-bind:key="item.id"
            >

                <v-expansion-panel-header>
                    <v-row>
                        <v-col
                            cols="6"
                            xl="1"
                            md="2"
                            lg="2"
                        >
                            <v-img
                                :aspect-ratio="1"
                                height="100"
                                width="100"
                                :src="`/storage${item.itemImgDir}/${item.itemImg}`"
                            ></v-img>
                        </v-col>
                        <v-col>
                            {{ item.itemName }}
                        </v-col>
                        <v-col>
                            <p v-if="item.Quantity == 0">Izdelka ni več na zalogi.</p>
                        </v-col>
                    </v-row>
                </v-expansion-panel-header>

                <v-expansion-panel-content>

                    <p v-if="item.isOnSale">Trenutno na razprodaji!</p>
                    <p v-if="item.Delisted === 0">Trenutno v prodaji</p>
                    <p v-else-if="item.Delisted === 1">Ni v prodaji</p>

                    <v-row>
                        <v-col
                            cols="12"
                            xl=4
                            lg="4"
                            md="4"
                        >
                            <v-btn
                                width="100%"
                                @click="changeItem(item)"
                            >Spremeni
                            </v-btn>
                        </v-col>
                        <v-col
                            xl=4
                            cols="12"
                            lg="4"
                            md="4"
                        >
                            <v-btn
                                @click="changeStatus(item.id)"
                                width="100%"
                            >
                                {{ item.delisted ? 'Vrni v prodajo' : 'Umakni iz prodaje'}}
                            </v-btn>

                        </v-col>
                    </v-row>
                </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>

        <!--Change items data-->
        <change-item v-if="this.$store.state.admin.changeItem_Dialog" :item="selectedItem"></change-item>

        <!-- Dialog for adding item-->
        <add-item></add-item>

        <!--Add new item-->
        <v-bottom-navigation
            app
            fixed
        >
            <v-btn
                @click="$store.state.admin.addItemDialog = !$store.state.admin.addItemDialog"

            >
                <span>Dodaj</span>
                <v-icon>{{ addIcon }}</v-icon>
            </v-btn>
        </v-bottom-navigation>

        <v-snackbar
            color="success"
            v-model="$store.state.admin.responseAddItem">
            {{ $store.state.admin.addItemText }}
        </v-snackbar>
    </v-container>
</template>

<script>

import addItem from "./addItem";
import changeItem from "./changeItem";
import api from "../../../services/api";

import {mdiPlus, mdiClose, mdiCheck, mdiAllInclusive} from '@mdi/js'

export default {
    components: {
        addItem,
        changeItem
    },
    data() {
        return {
            selectedItem: null,
            search: null,
            snackbar: true,
            // Icons
            addIcon: mdiPlus,
            Buttons: [
                {icon: mdiClose, functions: () => this.getDelistedItems()},
                {icon: mdiCheck, functions: () => this.getListedItems()},
                {icon: mdiAllInclusive, functions: () => this.getAllItems()}
            ]
        }
    },
    methods: {
        getAllItems() {
            return this.$store.dispatch('getItems')
        },

        getDelistedItems() {
            api.getDelistedItems()
                .then((response) => {
                    this.$store.commit('GET_ITEMS', response.data)
                })
        },

        getListedItems() {
            api.getListedItems()
                .then((response) => {
                    this.$store.commit('GET_ITEMS', response.data)
                })
        },
        changeItem(item) {
            this.selectedItem = item
            this.$store.dispatch('changeItemDialog', true)
        },

        /**
         * Changes listed status of an item
         * @param id
         */
        changeStatus(id){
            api.changeItemStatus(id)
            .then(()=>{
                this.getAllItems()
            })
        },

        searchItem() {
            let data = {
                "data": this.search
            }

            api.searchItems(data)
                .then((response) => {
                    this.items = response.data
                })
        }


    },
    mounted() {
        this.getAllItems()
    },
    computed:{
        items(){
            return this.$store.state.admin.items
        }
    }
}
</script>

