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
import TopNav from '@/components/TopNav.vue';
import MyHeader from '@/components/MyHeader.vue'
export default {
    components: {
        TopNav,
        MyHeader
    }
};
</script>

<style lang="less" scoped>
</style>