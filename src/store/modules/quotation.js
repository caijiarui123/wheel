let state = {
    isShowCity: false,
    currentCity: '',
    city: {}
}

let mutations = {
    showCity(state, payload){
        state.isShowCity = payload;
    },
    updateCity(state, payload){
        state.city = payload;
        state.isShowCity = false;
    }
}
export default {
    namespaced: true,
    state,
    mutations
}