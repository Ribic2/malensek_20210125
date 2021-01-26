import Axios from 'axios'

let instance = Axios.create({
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    }
})

export default {
    /**
     * PAYPAL
     */
    createPayment(){
        return instance.post('/api/create-payment')
    },

    /**
     * CART LOGIC
     */

    /**
     * Gets chart data
     * @returns {Promise<AxiosResponse<any>>}
     */
    getCart() {
        return instance.get('/api/user/cart')
    },

    /**
     * Sends request to add item to cart
     * @param data
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    addToCart(id, data) {
        return instance.post(`/api/item/${id}/cart/add`, {quantity: data})
    },

    /**
     * Delete item from cart
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    deleteFromCart(id) {
        return instance.delete(`/api/item/${id}/cart/delete`)
    },

    changeCartItemQuantity(id, data) {
        return instance.patch(`/api/item/${id}/cart/quantity`, data)
    },

    /**
     * Check if items exists in given cart for guest
     * @returns {Promise<AxiosResponse<any>>}
     */
    checkCartGuest(data){
        return instance.post('/api/cart/check', data)
    },

    /**
     * Change quantity with custom input
     * @param id
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    changeQuantityCustom(id, data){
      return instance.patch(`/api/item/${id}/cart/quantity/custom`, data)
    },
    /**
     * ITEMS ADMIN PAGE
     */

    /**
     * Gets all orders
     * @returns {Promise<AxiosResponse<any>>}
     */
    getOrders() {
        return instance.get('/api/orders');
    },

    latestOrders() {
        return instance.get('/api/orders/latest')
    },
    oldestOrders() {
        return instance.get('/api/orders/oldest')
    },
    completeOrders() {
        return instance.get('/api/orders/complete')
    },
    notCompleteOrders() {
        return instance.get('/api/orders/notComplete')
    },
    deny(id) {
        return instance.patch(`/api/order/${id}/deny`)
    },
    complete(id) {
        return instance.patch(`/api/order/${id}/complete`)
    },
    delay(id){
        return instance.patch(`/api/order/${id}/delay`)
    },

    /**
     * Change item status
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    changeItemStatus(id) {
        return instance.patch(`/api/item/${id}/change/status`)
    },
    /**
     * Sends request to get all delisted items
     * @returns {Promise<AxiosResponse<any>>}
     */
    getDelistedItems() {
        return instance.get('/api/items/delisted')
    },

    /**
     * Sends request to get all listed items
     * @returns {Promise<AxiosResponse<any>>}
     */
    getListedItems() {
        return instance.get('/api/items/listed')
    },
    /**
     * Adds new item to database
     * @returns {Promise<AxiosResponse<any>>}
     */
    addItem(data) {
        return instance.post('/api/item/add', data)
    },

    deleteItem(id){
        return instance.delete(`/api/item/${id}/delete`)
    },

    getAllCategories(){
      return instance.get('/api/categories/all')
    },

    /**
     * Sends request to change data
     * @param data
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    changeItem(data, id) {
        return instance.patch(`/api/item/${id}/change`, data);
    },
    /**
     * Gets all items
     * @returns {Promise<AxiosResponse<any>>}
     */
    getItems() {
        return instance.get('/api/items')
    },

    /**
     * Gets all items for customer
     * @returns {Promise<AxiosResponse<any>>}
     */
    getItemsCustomer() {
        return instance.get('/api/items/all')
    },

    /**
     * Get reviews for items
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    getReviews(id) {
        return instance.get(`/api/item/${id}/reviews`)
    },

    addReview(id, data) {
        return instance.post(`/api/item/${id}/review/add`, data)
    },

    /**
     * Search for item
     * @param data
     */
    searchItems(data) {
        return instance.post('/api/items/search', data)
    },

    /**
     * Sends contact data to database
     * @param {{name: string, message: string, email: string}} data data that will be send to database
     */
    sendContact(data) {
        return instance.post('/api/contact/add', data)
    },

    /**
     * Get information about item
     */
    getProductData(e) {
        return instance.get('/api/item/' + e)
    },

    /**
     *  Get all categories there are
     * @returns {Promise<AxiosResponse<any>>}
     */
    getCategories() {
        return instance.get('/api/item/categories')
    },

    /**
     * Gets items for specific category
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    getSpecificItems(data) {
        return instance.post('/api/item/category', data)
    },

    /**
     * Adds favourites item to database
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    addToFavourites(id) {
        return instance.post(`/api/user/favourites/item/${id}/add`);
    },

    /**
     * Gets all favourites for specific user
     * @returns {Promise<AxiosResponse<any>>}
     */
    getAllFavourites() {
        return instance.get('/api/user/favourites')
    },

    /**
     * Get all Contacts
     * @returns {Promise<AxiosResponse<any>>}
     */
    getContacts() {
        return instance.get('/api/contact/all')
    },

    /**
     * Get oldest contacts
     * @returns {Promise<AxiosResponse<any>>}
     */
    getOldestContacts() {
        return instance.get('/api/contact/all/oldest')
    },

    /**
     * Sends request to log in user
     * @param email
     * @param password
     * @returns {Promise<AxiosResponse<any>>}
     */
    login(email, password) {
        return instance.post('/api/user/login', {email: email, password: password})
    },

    /**
     * Registers user
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    register(data) {
        return instance.post('/api/user/register', data)
    },

    /**
     * Creates guest
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    createGuest(data){
        return instance.post('/api/user/guest/create', data)
    },

    /**
     * Updates user credentials if user is first time ordering
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    updateCredentials(data){
        return instance.patch('/api/user/credentials', data)
    },

    /**
     * Change users data basics
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    changeUserDataBasics(data) {
        return instance.patch('/api/user/change/basic', data)
    },

    /**
     * Change users residence data
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    changeUserDataResidence(data) {
        return instance.patch('/api/user/change/residence', data)
    },

    /**
     * Gets order history of a user
     */
    getUserOrderHistory() {
        return instance.get('/api/user/order/history');
    },

    /**
     * Get users data
     * @returns {Promise<AxiosResponse<any>>}
     */
    getUsersData() {
        return instance.post('/api/user/data')
    },

    /**
     * Send order request
     */
    getOrder(data) {
        return instance.post('/api/user/order/add', data)
    },

    /**
     * Checks if user is admin
     * @returns {Promise<AxiosResponse<any>>}
     */
    checkIfAdmin() {
        return instance.post('/api/user/admin')
    },

    /**
     * Gets all users
     * @returns {Promise<AxiosResponse<any>>}
     */
    getAllUsers() {
        return instance.get('/api/user/all')
    },

    /**
     * Deletes user
     * @param id users id
     * @returns {Promise<AxiosResponse<any>>}
     */
    deleteUser(id) {
        return instance.delete(`/api/user/${id}/delete`)
    },

    /**
     * Changes user status
     * @param id users id
     * @returns {Promise<AxiosResponse<any>>}
     */
    changeUserAdminStatus(id) {
        return instance.patch(`/api/user/${id}/change/admin`)
    },

    /**
     *
     * RESET PASSWORD
     *
     */

    /**
     * Sends reset password request.
     * Takes email as data
     * @returns {Promise<AxiosResponse<any>>}
     */
    requestResetPassword(data) {
        return instance.post('/api/reset-password', data)
    },

    /**
     * Gets token and all the required data and sends request to change database
     * @returns {Promise<AxiosResponse<any>>}
     */
    resetPassword(data) {
        return instance.post('/api/reset/password/', data)
    },

    setPassword(data){
        return instance.patch('/api/user/set/password', data)
    },

    checkIfPasswordSet(data){
        return instance.post('/api/user/check/token', data)
    }
}
