<template>
    <div>
        <p>询价</p>
        <div class="message">
            <p class="tip">个人信息</p>
            <ul>
                <li>
                    <span>姓名</span>
                    <input type="text" placeholder="请输入你的真实中文姓名">
                </li>
                <li>
                    <span>手机</span>
                    <input type="text" placeholder="请输入你的真实手机号码">
                </li>
                <li @click="showCity(true)">
                    <span>城市</span>
                    <span class="li_city">{{currentCity?currentCity:city.name}}</span>
                </li>
            </ul>
        </div>
        <CitySelect :class="isShowCity?'active':''"></CitySelect>
    </div>
</template>
<script>
import CitySelect from './common/CitySelect.vue';
import {mapState, mapMutations} from 'vuex';
export default {
    computed: {
        ...mapState({
            isShowCity: state=>state.quotation.isShowCity,
            currentCity: state=>state.quotation.currentCity,
            city: state=>state.quotation.city
        })
    },
    methods: {
        ...mapMutations({
            showCity: 'quotation/showCity'
        })
    },
    components: {
        CitySelect
    }
}
</script>
<style lang="scss" scoped>
    .message .tip {
        padding: 0 .2rem;
        height: .6rem;
        line-height: .6rem;
        font-size: .24rem;
        color: #666;
        background: #eee;
    }
    .message ul {
        background: #fff;
        padding: 0 .2rem;
        li{
            font-size: .32rem;
            height: .88rem;
            line-height: .88rem;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            color: #000;
            .li_city{
                display: inline-block;
                width: 88%;
                color: #555;
                text-align: right;
                box-sizing: border-box;
            }
            input{
                font-size: .32rem;
                padding-right: .2rem;
                width: 88%;
                text-align: right;
                box-sizing: border-box;
                color: #555;
                outline: none;
                -webkit-appearance: none;
                border: none;
            }
        }
    }
</style>
