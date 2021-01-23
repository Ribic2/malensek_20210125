import Vue from 'vue'
import VueRouter from 'vue-router'
import api from '../services/api'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        // Admin panel
        {
            path: '/admin',
            // Before entering admin panel it checks if user is admin
            beforeEnter: (to, from, next) => {
                api.checkIfAdmin()
                    .then((response) => {
                        console.log(response)
                        if (response.data) {
                            next()
                        } else {
                            next('/');
                        }
                    })
                    .catch((err) => {
                        next('/')
                    })
            },
            component: () => import('../layouts/admin'),
            children: [
                {
                    path: '',
                    component: () => import('../pages/admin/Items/items.vue')
                },
                {
                    path: 'orders',
                    component: () => import('../pages/admin/orders.vue')
                },
                {
                    path: 'contacts',
                    component: () => import('../pages/admin/contacts.vue')
                },
                {
                    path: 'users',
                    component: () => import('../pages/admin/users.vue')
                }
            ]
        },
        {
            path: '/',
            component: () => import('../layouts/default'),
            children: [
                // Home page
                {
                    path: '',
                    component: () => import('../pages/index/index')
                },
                // Contact page
                {
                    path: '/contact',
                    component: () => import('../pages/Contact/View.vue')
                },
                // Favourite
                {
                    path: '/favourites',
                    component: () => import('../pages/favourites.vue')
                },
                // Login
                {
                    path: '/login',
                    component: () => import('../pages/user/login.vue')
                },
                // Cart
                {
                    path: '/cart',
                    name: 'cart',
                    component: () => import('../pages/kosarica/index.vue'),
                    children: [
                        {
                            path: '/cart/1',
                            component: () => import('../pages/kosarica/credentials.vue'),
                        },
                        {
                            path: '/cart/2',
                            component: () => import('../pages/kosarica/paymentMethod.vue')
                        }
                    ]
                },

                // Agreement
                {
                    path: '/splosni-pogoji',
                    component: ()=>import('../pages/agreement/index')
                },
                // Register
                {
                    path: '/register',
                    component: () => import('../pages/user/register.vue'),
                },
                {
                    path: '/profile',
                    component: () => import('../pages/user/profile.vue'),
                    beforeEnter: (to, from, next) => {
                        api.getUsersData()
                            .then((response) => {
                                if (response.data) {
                                    next()
                                } else {
                                    next('/');
                                }
                            })
                            .catch((err) => {
                                next('/')
                            })
                    }
                },
                {
                    path: '/item/:id',
                    component: () => import('../pages/Item/View.vue'),
                },

                // Reset users password route
                {
                    path: '/reset-password',
                    name: 'reset-password',
                    component: () => import('../pages/resetPassword/forgotPassword.vue')
                },
                {
                    path: '/reset-password/:token',
                    name: 'reset-password-form',
                    component: () => import('../pages/resetPassword/ResetPasswordForm.vue')
                },
                {
                    path: '/success',
                    component: ()=> import('../pages/kosarica/success')
                },
                {
                    path:'/set-password',
                    component: ()=> import('../pages/user/setPassword'),
                    beforeEnter: (to, from, next) =>{
                        console.log(to.query.token)
                        api.checkIfPasswordSet({"token":to.query.token})
                            .then((response)=>{
                                if(response.data){
                                    console.log(response.data)
                                    next()
                                }
                                else{
                                    next('/')
                                }
                            })
                    }
                },
                {
                    path: '*',
                    component: ()=> import('../layouts/error')
                }
            ],
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: () => import('../pages/kosarica/checkout.vue')
        },
    ]
})

export default router
