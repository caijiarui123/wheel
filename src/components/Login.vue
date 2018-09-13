<template>
    <div class="box">
        <img src="../../static/image/timg.jpg" alt="">
        <div class="box_div">
            <h3>登录</h3>
            <input type="text" ref="username" placeholder="请输入用户名"></br>
            <input type="password" ref="password" placeholder="请输入密码"></br>
            <button @click="login">登录</button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        login() {
            let username = this.$refs.username.value;
            let password = this.$refs.password.value;
            console.log(username)
            console.log(password)
            if(username == 'cc' && password == 123){
                window.localStorage.setItem('login', 'true') 
                window.history.back();
            }else if(username == '' && password == ''){
                alert('用户名或密码不能为空');
            }else{
                alert('用户名或密码错误')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .box{
        width: 100%;
        height: 100%;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        .box_div{
            width: 6rem;
            height: 6rem;
            background: rgba(255, 255, 255, .4);
            position: absolute;
            top: .8rem;
            left: 10%;
            padding:0 .3rem;
            box-sizing: border-box;
            h3{
                width: 100%;
                text-align: center;
                margin-top:.3rem;
                color:#fff;
                font-size:.5rem;
            }
            input{
                width: 100%;
                height: .6rem;
                margin-top:.3rem;
                background: rgba(255, 255, 255, 0);
                outline: none;
                
            }
            button{
                width: 100%;
                height: .8rem;
                background: rgb(243, 221, 94);
                text-align: center;
                margin:0 auto;
                margin-top:.5rem;
                border:0;
                border-radius: .1rem;
                color:#fff;
                font-size:.4rem;
                outline: none;
            }
        }
    }
</style>
