let state = {
    isLogin: false
}

let mutations = {
    logins(state, payload) {
        if(payload.username == 'cc' && payload.password == '123') {
            state.isLogin = !state.isLogin
        }
        console.log(state.isLogin)
    }
}
export default {
    namespaced: true,
    state,
    mutations
}