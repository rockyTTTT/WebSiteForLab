<template>
    <!-- logo -->
    <TopLogo/>
    <!-- 头部导航栏 -->
    <HeaderNav/>

    <!-- 主体区域-->
    <div> 
        <!--二级路由-->
        <router-view/>
    </div>

    <!-- 底部区域-->
    <div>底部区域</div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
</style>