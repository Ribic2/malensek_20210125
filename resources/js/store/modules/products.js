import api from '../../services/api.js'

export default{
    state: ()=>({
        items: [],
        counter: 1,
        stopApiCalls: false,
        selected: false,
        categories: '',
        changeItemDialog: null
    }),
    mutations:{
        ADD_DATA(state, payload){
            //First checks if there were any specific selections
            if(state.selected == true){
                state.selected = false
                state.products = null
                state.products = payload

                state.counter++
            }
            else{
                if(payload.length <= 0 || state.stopApiCalls){
                    state.stopApiCalls = true
                }
                else{
                    if(state.products.length == 0){
                        state.products = payload
                    }
                    else{
                        for(let i = 0; i < payload.length; i++){
                            state.products.push(payload[i])
                        }
                    }
                    state.counter++
                }
            }
        },
        SET_ITEMS(state, payload){
            state.items = payload
        }
    },
    actions:{
        addToItems({commit}, data){
            commit('SET_ITEMS', data)
        }
    },
}
