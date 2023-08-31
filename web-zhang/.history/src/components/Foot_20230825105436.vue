<template>
    <div class="foot">
        <span>Contact: The Hong Kong Polytechnic University Lee Shau Kee Building, BlockY 922, Yuk Choi Rd, Hung Hom, Hong Kong</span>
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

    span{
        padding-top: 15px;
        letter-spacing: 1px;
        padding-left: 90px;
        font-size: 18px;
        font-weight: lighter;
        color: @timeColor;
    }
}
</style>