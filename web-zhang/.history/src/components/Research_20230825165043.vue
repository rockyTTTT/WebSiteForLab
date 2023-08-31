<template>
    <div class="research">
        <div class="content">
            <div class="research_nav">
                <ul>
                    <li class="title_span"><a href="#">Category</a></li>
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
   width:247px;
   height: 420px;
   line-height: 26px;
   padding:30px 0 30px 90px;
   float: left;
}
</style>