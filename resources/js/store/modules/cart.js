import api from '../../services/api.js'

export default {
    state: () => ({
        cart: [],
        fullPrice: 0
    }),
    mutations: {
        ADD_DATA_TO_CART(state, payload) {
            state.cart = payload
        },

        // Adds item to cart (guest)
        ADD_TO_CART(state, payload){
            // Checks if item is already in cart
            for(let i = 0; i < state.cart.length; i++){
              if(state.cart[i].items.id === payload.items.id){
                  state.cart.splice(i, 1)
                  return false;
              }
            }
            state.cart.push(payload)

            // If localstorage is not created
            if(localStorage.getItem('cart') === null){
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },

        // Update item quantity, if given quantity is over stock quantity
        UPDATE_QUANTITY(state, payload){
            state.cart.map((element)=>{
                if(element.items.id === payload.id){
                    element.quantity = parseInt(payload.quantity)
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    actions: {
        // New module logic
        getCart({commit}) {
            api.getCart()
                .then((response) => {
                    commit('ADD_DATA_TO_CART', response.data)
                })
        },
        /**
         * Gets cart for guest
         * @param commit
         */
        getCartGuest({commit}){
            if(localStorage.getItem('cart') === null){
                localStorage.setItem('cart', "[]")
            }
            let data = {
                "cart": JSON.parse(localStorage.getItem('cart'))
            }

            api.checkCartGuest(data)
                .then((response)=>{
                    commit('ADD_DATA_TO_CART', response.data)
                })
        },

        addItemToCart({commit}, data) {
            api.addToCart(data.id, data.quantity)
                .then(() => {
                    this.dispatch('getCart')
                })
        },

        /**
         * Adds item to cart for guest user
         * @param commit
         * @param data
         */
        addItemToCartGuest({commit}, data){
            commit('ADD_TO_CART', data)
        },

        /**
         * Sets quantity to max available stock quantity
         */
        updateQuantity({commit}, data){
            commit('UPDATE_QUANTITY', data)
        }
    },
    getters:{
        setCart: (state, rootState) => (id) =>{
            if( rootState.user == null){
                return state.cart.find(item => id === item.items.id)
            }
            else{
                return state.cart.find(item => id === item.itemId)
            }
        }
    }
}
