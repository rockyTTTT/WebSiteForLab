<template>
    <ul class="app-header-nav">
        <li><RouterLink to="/">首页</RouterLink></li>
        <li><a href="#">美食</a></li>
        <li><a href="#">餐厨</a></li>
        <li><a href="#">艺术</a></li>
        <li><a href="#">电器</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">洗护</a></li>
        <li><a href="#">孕婴</a></li>
        <li><a href="#">服装</a></li>
        <li><a href="#">杂货</a></li>
    </ul>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    components: { RouterLink }
}
</script>

<style lang="less" scoped>
.app-header-nav{

    li{
        float: left;
        padding: 0 10px;
        font-size: 16px;
        font-weight: bold;
    }
}
</style>