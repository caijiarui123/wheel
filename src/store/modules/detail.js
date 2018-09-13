import {getDetailList} from '../../api/index';
let state = {
    //详情的数据
    info: {},
    currentYear: '全部' //当前选中的年份
}

let getters = {
    datas(state) {
        if(state.info){
            return state.info  
        }
    },
    years(state){
        // console.log(state.info)
        if(!state.info.list){
            return [];    
        }
        let arr = state.info.list.map(item=>{
            return item.market_attribute.year;
        })
        let set = new Set(arr);
        return ['全部', ...set]
    },
    list(state){
        if(!state.info.list){
            return [];
        }
        function merge(arr){
            let types = [];
            let obj = {};
            arr.forEach(item=>{
                let type = item.exhaust_str + '/' + item.max_power_str + ' ' + item.inhale_type;
                if(types.indexOf(type) == -1){
                    types.push(type);
                    obj[type] = [item];
                }else{
                    obj[type].push(item);
                }
            })
            return obj
        }
        if(state.currentYear == '全部'){
            return merge(state.info.list);
        }else{
            return merge(state.info.list.filter(item=>{
                return item.market_attribute.year == state.currentYear;
            }))
        }
    }
}

let mutations = {
    //改变年份
    changeYear(state,payload){
        state.currentYear = payload;
    },
    //显示详情数据
    updataInfo(state, payload){
        state.info = payload;
        // console.log(payload)
        payload.list.sort((a, b)=>{
            //按年份降序
            if(b.market_attribute.year != a.market_attribute.year) {
                return b.market_attribute.year - a.market_attribute.year
            }else {
                //按照排升序
                if(b.exhaust_str > a.exhaust_str){
                    return -1;
                }else if(b.exhaust_str < a.exhaust_str){
                    return 1;
                }else{
                    //按照功率升序
                    if(b.max_power_str > a.max_power_str){
                        return -1;
                    }else if(b.max_power_str < a.max_power_str){
                        return 1;
                    }else{
                        //按照指导价格升序
                        if(b.market_attribute.dealer_price_min > a.market_attribute.dealer_price_min){
                            return -1;
                        }else{
                            return 1;
                        }
                    }
                }
            }
        })
    }
}

let actions = {
    getDetailList: ({commit}, payload)=>{
        getDetailList(payload).then(body=>{
            // console.log('detailList...', body)
            commit('updataInfo', body.data);
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}