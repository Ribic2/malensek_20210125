import api from '../../services/api.js'
import Axios from 'axios'

export default{
    state: ()=>({
        items: [],
        orders: [],

        // Dialogs for items
        addItemDialog: false,
        addItemText: null,
        responseAddItem: false,

        // Change item
        changeItem_Dialog: false,
    }),
    mutations:{
        GET_ITEMS(state, payload){
            state.items = payload
        },
        GET_ORDERS(state, payload){
            state.orders = payload
        },

        CHANGE_ITEM_DIALOG(state, payload){
            state.changeItem_Dialog = payload
        }
    },
    actions:{
        // New module
        changeItemDialog({commit}, payload){
            commit('CHANGE_ITEM_DIALOG', payload)
        },
        getItems({commit}){
            api.getItems()
                .then((response)=>{
                    commit('GET_ITEMS', response.data)
                })
        }
    },
    getters:{

    }
}
