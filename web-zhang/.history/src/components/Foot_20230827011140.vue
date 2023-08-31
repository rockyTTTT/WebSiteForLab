<template>
    <!-- <div class="foot">
        <div class="foot_content">Contact: The Hong Kong Polytechnic University Lee Shau Kee Building, BlockY 922, Yuk Choi Rd, Hung Hom, Hong Kong</div>
    </div> -->

    <div class="header-nav">
        <div class="w">
            Contact: The Hong Kong Polytechnic University Lee Shau Kee Building, BlockY 922, Yuk Choi Rd, Hung Hom, Hong Kong
        </div>
    </div>
 </template>

 <script>
    export default {

    }
</script>

<style lang="less" scoped>
.foot{
    background-color: @footColor;
    height: 58px;
    border-radius: 5px;
    // float: left;
}
.foot_content{
    padding-top: 20px;
    display: flex;
    letter-spacing: 1px;
    padding-left: 13%;
    font-size: 18px;
    font-weight: lighter;
    color: @timeColor;
}

.header-nav{
    background-color: @navColor;
    border-radius: 5px;
    ul {
        display: flex;
        height: 54px;
        line-height: 54px;
        justify-content: left;
        li{
            .router-link-exact-active{
                color: highLightColor;
                border-bottom: 4px solid @highLightColor;
            }
            .link{
                font-size: 20px;
                font-weight: bold;
                color: #333;
                padding: 12px 36px;
                cursor: pointer;
                &:hover{
                    color: @highLightColor;
                }
            }
        }
    }
}
</style>