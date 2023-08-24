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
                <!-- 搜索下面的导航 -->
                <div class="center-navs">
                    <ul>
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
        width: 230px;
        height: 60px;
    }
    
    .center{
        flex: 1;
        .center-search{
            width: 540px;
            height: 35px;
            input{
                width: 440px;
                height: 35px;
                border: 1px solid @xtxColor;
                border-radius: 20px 0 0 20px;
                padding-left: 15px;
                box-sizing: border-box;
            }
            .search-btn{
                float: right;
                width: 100px;
                height: 35px;
                background-color: @xtxColor;
                border: 0;
                border-radius: 0 20px 20px 0;
                color: #fff;
                font-size: 16px;
            }
        }

        .center-navs{
            width: 540px;
            li{
                float: left;
                height: 32px;
                padding: 5px;
                a{
                    padding: 0 5px;
                    border-right: 1px solid #ccc;
                }
            }
            li:last-child a {
                    border-right: 0;
                }
        }
    }
}
</style>