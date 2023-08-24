<template>
    <div class="my-header w">
        <!-- 上区域-->
        <div class="header-top">
            <!-- logo -->
            <h1 class="logo">
                <router-link to="/">网易严选</router-link>
            </h1>

            <!-- 搜索 -->
            <div class="center">
                <div class="center-search">
                    <input type="text" name="" id="" placeholder="618....">
                    <button class="search-btn">搜索</button>
                </div>
            </div>

            <!-- 购物车 -->
            <div class="cart">

            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
.my-header{
    padding: 25px 0 0 0;
    height: 120px;
    background-color: #fff;
}

.header-top {
    display: flex;
    .logo{

    }
    
    .center{

    }
}
</style>