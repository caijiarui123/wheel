<template>
    <div class="img_wrap">
        <div class="img_list">
            <p class="color">颜色</p>
            <p class="type">车款</p>
        </div>
        <ul class="ul_img">
            <li></li>
        </ul>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
    .img_wrap{
        width: 100%;
        height: 100%;
        background: #f4f4f4;
        .img_list{
            position: fixed;
            background: #fff;
            top: 0;
            width: 100%;
            height: .8rem;
            -webkit-box-align: center;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            z-index: 99;
            p{
                -webkit-box-flex: 1;
                flex: 1;
                text-align: center;
                box-sizing: border-box;
                color: #454545;
                display: inline-block;
            }
            .type{
                border-left: 1px solid #ececec;
            }
        }
    }
</style>