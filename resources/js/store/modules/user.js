import api from '../../services/api.js'

export default{
    state: ()=>({
        spinner: false,
        user: [],

        // Guest data
        guest: [],
        orderCredentials:{
            Name: null,
            Surname: null,
            Email: null,
            Telephone: null,
            houseNumberAndStreet: null,
            postcode: null,
            region: null
        },
        // Add Credentials in cart
        deliver:{
            houseNumberAndStreet: null,
            postcode: null,
            region: null
        }

    }),
    mutations:{
        SET_USER_DATA(state, payload){
            state.user = payload
        },
        SET_USER_DATA_LOGOUT(state, payload){
            state.user = payload
        },
        SET_GUEST_DATA(state, payload){
            state.guest = payload
        }
    },
    actions:{
        getUser({commit}){
           api.getUsersData().then((response)=>{
               if(response.data.check){
                   commit('SET_USER_DATA_LOGOUT', response.data.user)
               }
           })
        },

        logout({commit}){
            // Clears token and cart
            let cookie = localStorage.getItem('vue-cookie-accept-decline-myPanel1');
            localStorage.clear();
            localStorage.setItem('vue-cookie-accept-decline-myPanel1', cookie);
            commit('SET_USER_DATA', [])
            document.location.href = "/";
        },
        getUserOrderHistory({commit}){
            api.getUserOrderHistory()
                .then((response)=>{
                    console.log(response)
                })
        },

        // Adds item to cart
        addToCart({commit}, product) {
            api.addToCart(product.id)
                .then((response) => {
                    console.log(response)
                })
        },

        setGuest({commit}){
            if(localStorage.getItem('guest') !== null){
                commit('SET_GUEST_DATA', JSON.parse(localStorage.getItem('guest')))
            }
        }
    },
    getters: {
        Name: (state) =>{
            return state.user.Name
        }
    }

}
