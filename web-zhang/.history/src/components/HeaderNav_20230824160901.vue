<template>
    <div class="header-nav">
        <div class="w">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Publications</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Join us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
 </template>

 <script>
    export default {

    }
</script>

<style lang="less" scoped>
.header-nav{
    background-color: #c1f9f1;
    border-radius: 5px;
    ul {
        display: flex;
        height: 54px;
        line-height: 54px;
        justify-content: left;
        li{
            a{
                font-size: 20px;
                color: #333;
                padding: 12px 36px;
                cursor: pointer;
            }
        }
    }
}
</style>