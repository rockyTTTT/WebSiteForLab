<template>
    <div class="research">
        <div class="content">
            <div class="title">
                <ul class="research_nav">
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

}
</style>