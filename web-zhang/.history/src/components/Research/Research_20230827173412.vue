<template>
    <div class="research">
        <div class="content">
            <div class="research_nav">
                <ul>
                    <li class="title_span">Category</li>
                    <li class="research_nav_name"><RouterLink class="research_link" to="/research/fund">Fund</RouterLink></li>
                    <li class="research_nav_name"><RouterLink class="research_link" to="/research/biology">Research - Biology, genetics and genomics</RouterLink></li>
                    <li class="research_nav_name"><RouterLink class="research_link" to="/research/machineLearning">Research - Machine learning/datamining</RouterLink></li>
                    <li class="research_nav_name"><RouterLink class="research_link" to="/research/interests">Research interests - Heuristic search, planning and optimization</RouterLink></li>
                </ul>
            </div>
            <router-view/>
        </div>
    </div>
    <div class="goTop">
        <a href="#top">
            <div>
                <i class="iconfont icon-backtop research_icon"></i>
            </div>
            <div></div>
        </a>
    </div>
 </template>

 <script>
    export default {

    }
</script>

<style lang="less" scoped>
.research{
    background-color: @intervalColor;
    display: inline-block;
    padding-left: 144.5px;
}
.research_nav{
   line-height: 26px;
   padding:30px 0 30px 90px;
   display: inline-block;
   width: 200px;
   height: 380px;
}
.research_nav_name{
    font-size: 18px;
    padding-top: 30px;
    .router-link-exact-active{
                color: @highLightColor;
                border-bottom: 1px solid @highLightColor;
            }
}
.research_link{
    color: @timeColor;
    font-weight: bold;
    &:hover{
        color: @highLightColor;
    }
}
.goTop{
    scroll-behavior: smooth;
    height: 100vh;
    overflow: auto;
    width: 122px;
    height: 48px;
}

</style>