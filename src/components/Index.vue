<template>
    <div class="wrap">
        <div class="index">
                <section>
                    <div class="box" v-for="(item, index) in brand" :key="index">
                        <h4 class="hh" :id="index">{{index}}</h4>
                        <dl class="dl" v-for="(key, val) in item" :key="val" @click="getMakeList(key.MasterID)">
                            <dt>
                                <img :data-src="key.CoverPhoto" src="../assets/login.png"/>
                            </dt>
                            <dd>{{key.Name}}</dd>
                        </dl>
                    </div>
                </section>
            </div>
            <p class="letter" v-if="flag">{{letter}}</p>
            <ul class="aul" @touchstart="touchStart"
                @touchmove="touchMove"
                @touchend="touchEnd">
                <li v-for="(key, val) in letters">
                    {{key}}
                </li>
            </ul>
            <MakeList></MakeList>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions,
        mapMutations
    } from "vuex";
    import MakeList from './common/MakeList';
    import lazyLoad from '../util/lazyLoad';
    export default {
        computed: {
            ...mapState({
                letters: state=>state.app.letters,
                brand: state=>state.app.brand,
                letter: state=>state.app.letter,
                flag: state=>state.app.flag
            })
        },
        components:{
            MakeList
        },
        methods: {
            ...mapActions({
                listDate: 'app/listData',
                getMakeList: 'app/getMakeList'
            }),
            ...mapMutations({
                showLetter: 'app/showLetter',
                changeLetter: 'app/changeLetter'
            }),
            touchStart(e){
                this.showLetter(true);
                let letter = e.target.innerHTML;
                if(this.letter != letter){
                    this.changeLetter(letter);
                }
            },
            touchMove(e){
                let pageY = e.touches[0].pageY;
                let index = Math.floor((pageY - this.marginTop) / this.height); 
                if(index < 0){
                    index = 0;
                }else if(index > this.letters.length - 1){
                    index = this.letters.length - 1
                }
                let str = this.letters[index]
                if(this.letter != str){
                    let ele = document.getElementById(str);
                    let top = ele.offsetTop;
                    // console.log(top)
                    this.changeLetter(str)
                    document.querySelector('.index').scrollTop = top;
                }
            },
            touchEnd(){
                this.showLetter(false);
            }
        },
        mounted() {
            this.$store.dispatch('app/listDate');
        },
        updated(){
            this.height = 0.5* window.innerWidth / 750 * 100;
            this.marginTop = (window.innerHeight - this.letters.length * this.height) / 2;
            lazyLoad('.index')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    #app {
        width: 100%;
        height: 100%;
    }
    
    .wrap {
        width: 100%;
        height: 100%;
        background: #F5F5F5;
    }
    
    .wrap>.index {
        height: 100%;
        overflow:scroll;
  
    }
    
    .box {
        width: 100%;
        height: 100%;
        background: #fff;
        padding: 0 .3rem;
        box-sizing: border-box;
    }
    
    .letter {
        width: 1.4rem;
        height: 1.4rem;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        z-index: 999;
        text-align: center;
        line-height: 1.5rem;
        font-size:.6rem;
    }
    
    .aul {
        width: .45rem;
        position: fixed;
        right: 0;
        top: 12%;
        font-size: .25rem;
    }
    
    .aul>li {
        width: 100%;
        height: .45rem;
        text-align: center;
        line-height: .45rem;
        color: #266DE2;
    }
    
    .hh {
        width: 104%;
        height: .8rem;
        background: #f5f5f5;
        margin-left: -.3rem;
        padding-left: .3rem;
        color: #828282;
        line-height: .8rem;
        font-weight: 400;
    }
    
    .dl {
        width: 100%;
        height: 1.2rem;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: left;
    }
    
    .dl>dt>img {
        width: .8rem;
        height: .8rem;
    }
    
    .dl>dd {
        margin-left: .3rem;
    }
    /* .sec{
        width: 75%;
        height: 100%;
        background: red;
        position: fixed;
        right:0;
        top:0;
    } */
</style>
