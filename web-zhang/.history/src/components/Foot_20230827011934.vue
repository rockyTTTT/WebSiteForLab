<template>
    <!-- <div class="foot">
        <div class="foot_content">Contact: The Hong Kong Polytechnic University Lee Shau Kee Building, BlockY 922, Yuk Choi Rd, Hung Hom, Hong Kong</div>
    </div> -->

    <div class="foot">
        <div class="w foot_content">
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
    height: 58px;
    background-color: @footColor;
    border-radius: 5px;
}
.foot_content{
    // padding-top: 20px;
    // display: flex;
    // letter-spacing: 1px;
    font-size: 18px;
    // font-weight: lighter;
    color: @timeColor;
    padding-left: 15px;
    height: 54px;
    line-height: 54px;
    justify-content: left;
}
</style>