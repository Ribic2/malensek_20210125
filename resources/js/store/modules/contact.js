import api from '../../services/api.js'

export default{
    state: ()=>({
        contacts: null
    }),
    mutations:{
        GET_CONTACTS(state, data){
            state.contacts = data
        }
    },
    actions:{
        getContacts({commit}){
            api.getContacts()
            .then((response)=>{
                commit('GET_CONTACTS', response.data)
            })
        },
        getOldestContacts({commit}){
            api.getOldestContacts()
            .then((response)=>{
                commit('GET_CONTACTS', response.data)
            })
        },
    },
}
