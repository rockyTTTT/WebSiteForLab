<template>
    <!-- 顶部通栏 -->
    <!-- <div>TopNav</div> -->
    <TopNav/>

    <!-- 头部通栏 -->
    <div>
        <i class="iconfont icon-iconphone"></i>
        头部区域
    </div>

    <!-- 主体区域-->
    <div class="main"> 
        <!--二级路由-->
        <router-view/>
    </div>

    <!-- 底部区域-->
    <div>底部区域</div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
export default {
    components: {
        TopNav
    },
    components: { TopNav }
};
</script>

<style lang="less" scoped>
</style>