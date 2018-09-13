<template>
    <div :class="isShowList?'section active':'section'"
        ref="section"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend">
        <ul class="oul" v-for="(item, index) in makeList" :key="index">
            <p class="top">{{item.GroupName}}</p>
            <li v-for="(val, key) in item.GroupList" :key="key" @click = "goDetail(val.SerialID)">
                <img :src="val.Picture">
                <div>
                    <p>{{val.AliasName}}</p>
                    <p class="red">{{val.DealerPrice}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        computed: {
            ...mapState({
                makeList: state=>state.app.makeList,
                isShowList: state=>state.app.isShowList
            })
        },
        methods: {
            ...mapMutations ({
                hideMakeList: 'app/hideMakeList'
            }),
            touchstart(e) {
                this.touch = e.touches[0];
            },
            touchmove(e) {
                let touch = e.touches[0];
                this.offsetX = touch.pageX - this.touch.pageX;
                if(this.offsetX > 0){
                    this.$refs.section.style = `transform:translate3d(${this.offsetX}px,0,0)`;
                }
            },
            touchend(e) {
                this.$refs.section.style = '';
                if(this.offsetX > 100){
                    this.hideMakeList();
                }
            },
            goDetail(id) {
                this.$router.push({path: '/detail', query: {id}})
            }
        }
    }
</script>
<style >
    .section{
        width: 70%;
        height: 100%;
        position: fixed;
        right:0;
        top:0;
        background: #fff;
        overflow-y: scroll;
        transform: translate3d(100%, 0, 0);
    }
    .top{
        width: 100%;
        height: .6rem;
        font-size:.4rem;
        text-align: center;
        line-height: .6rem;
        background: #f5f5f5;
        color:#828282;
    }
    .oul>li{
        width: 100%;
        height: 1.5rem;
        border-bottom: 1px solid #e9e9e9;
        display: flex;
        padding:.2rem;
        box-sizing: border-box;
        align-items: center;
    }
    .oul>li>img{
        height: 100%;
        width: auto;
    }
    .oul>li>div{
        margin-left:.3rem;
    }
    .oul>li>div>.red{
        color:#c00;
        font-size:.25rem;
    }
    .section.active{
        transform: translate3d(0,0,0);
        transition: transform .3s linear;
    }   
</style>