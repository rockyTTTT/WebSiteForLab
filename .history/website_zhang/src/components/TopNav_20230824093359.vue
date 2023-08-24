
<template>
    <div class="top-nav">
        <div class = "w">
            <ul>
                <li><a href="javascript:;">登录/注册</a></li>
                <li><a href="javascript:;">我的订单</a></li>
                <li><a href="javascript:;">会员</a></li>
                <li><a href="javascript:;">甄选家</a></li>
                <li><a href="javascript:;">客户服务</a></li>
                <li>
                    <a href="javascript:;">
                        <i class="iconfont icon-iconphone"></i>
                        APP</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
.top-nav {
    background-color: #333;
    ul {
        display: flex;
        height: 53px;
        line-height: 53px;
        justify-content: flex-end;
        li{
            a{
                padding: 0 10px;
                color: #ccc;
            }
        }
    }
}
</style>