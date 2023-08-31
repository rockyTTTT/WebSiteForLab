<template>
    <div class="foot">
        <div class="foot_content">Contact: The Hong Kong Polytechnic University Lee Shau Kee Building, BlockY 922, Yuk Choi Rd, Hung Hom, Hong Kong</div>
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
    padding-left: 12%;
    font-size: 18px;
    font-weight: lighter;
    color: @timeColor;
}
</style>