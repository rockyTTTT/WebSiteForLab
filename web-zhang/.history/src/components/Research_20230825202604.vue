<template>
    <div class="research">
        <div class="content">
            <div class="research_nav">
                <ul>
                    <li class="title_span"><a href="#">Category</a></li>
                    <li class="research_nav_name"><a href="#">Fund</a></li>
                    <li class="research_nav_name"><a href="#">Research - Biology, genetics and genomics</a></li>
                    <li class="research_nav_name"><a href="#">Research - Machine learning/datamining </a></li>
                    <li class="research_nav_name"><a href="#">Research interests - Heuristic search, planning and optimization</a></li>
                </ul>
            </div>

            <div class="research_view">
                显示部分
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
   line-height: 26px;
   padding:30px 0 30px 90px;
   display: inline-block;
   width: 200px;
}
.research_nav_name{
    font-size: 18px;
    padding-top: 30px;
    a{
        color: @timeColor;
    }
}
.research_view{
   display: inline-block;
}
</style>