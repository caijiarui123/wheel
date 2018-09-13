import {getBrandList, getMakeList} from '../../api/index';

let state = {
    letters: [],
    brand: {},
    flag: false,
    letter: '',
    brandId: '',
    makeList: '' ,
    isShowList: false
}

let mutations = {
    listDate: (state, payload)=>{
        // console.log(payload)
        let letters = [];
        let brand = {};
        // console.log(payload)
        payload.forEach((item)=> {
            let spell = item.Spelling[0];
            if(letters.indexOf(spell) != -1) {
                brand[spell].push(item)
            }else {
                letters.push(spell);
                brand[spell] = [item];
            }
        });
        state.letters = letters;
        state.brand = brand;
    },
    //显示车的数据
    changeMakeList: (state, payload)=>{
        state.brandId = payload.id;
        state.makeList = payload.list;
        state.isShowList = true;
    },
    //字母显示隐藏
    showLetter: (state, payload)=>{
        state.flag = payload;
    },
    //改变letter
    changeLetter: (state, payload)=>{
        state.letter = payload;
    },
    hideMakeList: (state)=>{
        state.isShowList = false;
    }
}

let actions = {
    listDate: ({commit}, payload)=>{
        getBrandList().then(body=>{
            if (body.code == 1){
                commit('listDate', body.data);
            }else{
                alert(body.msg);
            }
        })
    },
    getMakeList: ({commit, state}, payload)=>{
        if (payload != state.brandId){
            getMakeList(payload).then(body=>{
                // console.log('makeList...', body);
                commit('changeMakeList', {
                    id: payload,
                    list: body.data
                })
            })
        }
    }
}
export default {
    namespaced: true,
    state,
    // getter,
    mutations,
    actions
}