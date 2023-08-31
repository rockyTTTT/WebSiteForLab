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
import TopLogo from '@/components/TopLogo.vue';
import HeaderNav from '@/components/HeaderNav.vue';
export default {
    components: {
        TopLogo,
        HeaderNav
    }
};
</script>

<style lang="less" scoped>
</style>