<template>
    <div>
        <div id="paypal-button"></div>
    </div>
</template>


<script>
export default {
    name: "paypal.vue",
    data(){
        return{
            token: null
        }
    },
    mounted() {
        paypal.Buttons({
            createOrder: (data, actions) => {
                return fetch('/api/create-payment', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json, text-plain, */*",
                    },
                    body: JSON.stringify({
                        token: this.user.token,
                        cart: this.cart
                    })
                })
                    .then(function(res){
                        return res.json()
                    })
                    .then(function(data){
                        return data.result.id
                    })
            },
            onApprove: (data, actions) =>  {
                this.$store.commit('TOGGLE_SPINNER', true)
                return fetch('/api/execute-payment', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json, text-plain, */*",
                    },
                    body: JSON.stringify({
                        paymentID: data.paymentID,
                        orderID: data.orderID,
                        token: this.user.token,
                        cart: this.cart,
                        typeOfPayment: 'prepaid'
                    })
                })
                    .then((res)=>{
                        localStorage.removeItem('cart')
                        this.$store.commit('ADD_DATA_TO_CART', [])
                    })
                    .then(()=>{
                        this.$store.commit('TOGGLE_SPINNER', false)
                        this.$router.push('/success')
                    })
            }
        }).render('#paypal-button'); // Display payment options on your web
    },
    computed:{
        // Checks if user ordering is either guest or logged in user
        user(){
            return this.$store.state.user.user.length === 0 ? this.$store.state.user.guest : this.$store.state.user.user
        },
        cart(){
            return this.$store.state.cart.cart
        }
    }
}
</script>

