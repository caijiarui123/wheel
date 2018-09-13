<template>
    <div class="detail">
        <div class="header">
            <img :src="datas.Picture" @click="goImg">
            <p>查看更多图片</p>
        </div>
        <div class="year">
            <span @click="changeYear(item)" v-for="(item, index) in years" :key="index" :class="currentYear==item?'active':'padd'">{{item}}</span>
        </div>
        <section>
            <ul v-for="(item, index) in list" :key="index">
                <p>{{index}}</p>
                <li v-for="(val, key) in item" :key="key">
                    <p>{{val.market_attribute.year+'款'+val.car_name}}</p>
                    <p>{{`${val.max_power}马力${val.gear_num}档${val.trans_type}`}}</p>
                    <p>
                        <span>{{`指导价${val.market_attribute.dealer_price_min}`}}</span>
                        <span>{{val.market_attribute.official_refer_price}}</span>
                    </p>
                    <b class="ob" @click="goInquiry(val.car_id)">询问低价</b>
                </li>
            </ul>
        </section>
        <div class="foot">
            <p class="foot_p">{{datas.BottomEntranceTitle}}</p>
            <span class="foot_span">本地经销商为你报价</span>
        </div>
    </div>
</template>
<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapState({
                currentYear: state=>state.detail.currentYear
            }),
            ...mapGetters({
                years: 'detail/years',
                list: 'detail/list',
                datas: 'detail/datas'
            })
        },
        methods: {
            ...mapActions({
                getDetailList: 'detail/getDetailList'
            }),
            ...mapMutations({
                changeYear: 'detail/changeYear'
            }),
            goInquiry(id){
                this.$router.push({path: '/quotation', query: {id}})
            },
            goImg(){
                this.$router.push({path: '/img'})
            }
        },
        mounted() {
            this.getDetailList(this.$route.query.id);
        }
    }
</script>
<style lang="scss" scoped>
    .detail{
        width: 100%;
        height: 100%;
    }
    .header{
        width: 100%;
        position: relative;
        img{
            width: 100%;
        }
        p{
            position: absolute;
            right:.5rem;
            bottom:.5rem;
            width: 2rem;
            height: .4rem;
            background:#ccc;
            border-radius: .2rem;
            font-size:.25rem;
            color:#fff;
            text-align: center;
            line-height: .4rem;
        }
    }
    section{
        padding-bottom:1rem;
        box-sizing: border-box;
    }
    li{
        list-style: none;
        span{
            padding-right: .46rem;
        }
    }
    .year{
        border-top: .15rem solid #f4f4f4;
        padding: 0 .3rem;
        font-size: .32rem;
        height: .77rem;
        line-height: .77rem;
        background: #fff;
        .padd{
            margin-right:.4rem;    
        }
    }
    .year .active{
        color: #3aacff;
        margin-right:.4rem; 
    }
    ul>p{
        padding: 0 .2rem;
        height: .5rem;
        line-height: .5rem;
        font-size: .26rem;
        color: #999;
        background: #f4f4f4;
    }
    ul>li{
        padding: 0 .2rem;
        border-bottom: .18rem solid #f4f4f4;
        overflow: hidden;
        p:nth-child(1){
            padding: .26rem 0 .18rem;
            font-size: .3rem;
            line-height: 1;
            color: #3d3d3d;
        }
        p:nth-child(2){
            color: #bdbdbd;
            font-size: .26rem;
        }
        p:nth-child(3){
            text-align: right;
            padding-bottom: .1rem;
            font-size: .24rem;
            color: #818181;
            span:nth-child(2){
                font-size: .3rem;
                color: #ff2336;
                margin-left: .1rem
            }
        }
    }
    .ob{
        display: inline-block;
        width: 100%;
        height: .8rem;
        text-align: center;
        line-height: .8rem;
        border-top: 1px solid #eee;
        color:#00afff;
        font-weight: 400;
    }
    ul>li:last-child{
       border-bottom: 0;
    }
    .foot{
        position: fixed;
        bottom:0;
        left:0;
        width: 100%;
        height: 1rem;
        background: #3aacff;
        text-align: center;
        line-height: .5rem;
        color:#fff;
    }
    .foot>.foot_span{
        font-size:.25rem;
    }
</style>