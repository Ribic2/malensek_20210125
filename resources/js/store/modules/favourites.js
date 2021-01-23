import api from '../../services/api.js'

export default {
    state: () => ({
        favourites: []
    }),
    mutations: {
        RESET_FAVOURITES(state, payload) {
            state.favourites = payload
        },

        ADD_TO_FAVOURITES(state, payload) { // Checks if item is already in cart
            for(let i = 0; i < state.favourites.length; i++){
                if(state.favourites[i].id === payload.id){
                    // If item was found in the state, it removes it from state
                    // and then stores new state to localstorage
                    // and at the end it returns false so function stops
                    state.favourites.splice(i, 1)
                    localStorage.setItem('favourites', JSON.stringify(state.favourites))
                    return false;
                }
            }
            if (state.favourites.length === 0) {
                state.favourites.push(payload)
            }
            else if(state.favourites.indexOf(payload.items) === -1){
                state.favourites.push(payload)
            }
            localStorage.setItem('favourites', JSON.stringify(state.favourites))
        },
    },
    actions: {
        //Calls mutation that pushes new item to favourites
        addToFavourites({commit, dispatch}, payload) {
            api.addToFavourites(payload)
                .then(() => {
                   dispatch('getFavourites')
                })
        },

        addToFavouritesGuest({commit}, payload) {
            commit('ADD_TO_FAVOURITES', payload)
        },

        /**
         * Gets all favourites for logged in user
         * @param commit
         */
        getFavourites({commit}) {
            api.getAllFavourites()
                .then((response) => {
                    commit('RESET_FAVOURITES', response.data)
                })
        },

        /**
         * Gets all favourites for guest user
         * @param commit
         */
        getFavoritesGuest({commit}) {
            if (localStorage.getItem('favourites') === null) {
                localStorage.setItem('favourites', "[]")
            }
            commit('RESET_FAVOURITES', JSON.parse(localStorage.getItem('favourites')))
        }
    },
    getters:{
        setFavourites: (state) => (id) =>{
            return state.favourites.find(item => item.itemsId === id)
        }
    }
}
