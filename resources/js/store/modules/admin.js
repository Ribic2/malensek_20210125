import api from '../../services/api.js'
import Axios from 'axios'

export default{
    state: ()=>({
        items: [],
        orders: [],

        // Dialogs for items
        addItemDialog: false,

        // Response
        responseText: null,
        responseStatus: false,
        responseType: null,
        // Change item
        changeItem_Dialog: false,

        // Delete item
        deleteItemDialog: false,
        deleteItemId: null,
    }),
    mutations:{
        GET_ITEMS(state, payload){
            state.items = payload
        },
        GET_ORDERS(state, payload){
            state.orders = payload
        },
        TOGGLE_DELETE(state, payload){
            state.deleteItemDialog = payload
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
