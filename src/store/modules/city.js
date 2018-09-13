import {getCityList} from '../../api/index';
let state = {
    locationCity: '',
    provinces: [],
    cities: [],
    isShowCity: false
}
let mutations = {
    updateProvinces(state, payload){
        state.provinces = payload.data;
    },
    updateCities(state,payload){
        state.cities = payload.data;
        state.isShowCity = true;
    },
    hideCity(state, payload){
        state.isShowCity = false;
    }
}
let actions = {
    getCityList({commit}, payload){
        if(payload){
            getCityList(payload).then(body=>{
                console.log(body)
                commit('updateCities', body)
            })    
        }else{
            getCityList().then(body=>{
                commit('updateProvinces', body)
            })
        }
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}