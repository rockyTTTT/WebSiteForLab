<template>
    <div class="research">
        <div class="content">
            <div class="research_nav">
                <ul>
                    <li><a href="#">目录</a></li>
                    <li><a href="#">目录</a></li>
                    <li><a href="#">目录</a></li>
                    <li><a href="#">目录</a></li>
                    <li><a href="#">目录</a></li>
                </ul>
            </div>

            <router-view/>

        </div>
    </div>
 </template>

 <script>
    export default {

    }
</script>

<style lang="less" scoped>
.research{
    background-color: @intervalColor;
}
.research_nav{
    padding-left: 90px;
    padding-top: ;
}
</style>