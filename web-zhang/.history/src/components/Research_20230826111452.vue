<template>
    <div class="research">
        <div class="content">
            <div class="research_nav">
                <ul>
                    <li class="title_span">Category</li>
                    <li class="research_nav_name"><RouterLink class="research_link" to="/researchFund">Fund</RouterLink></li>
                    <li class="research_nav_name"><RouterLink class="research_link" to="/researchFund">Research - Biology, genetics and genomics</RouterLink></li>
                    <li class="research_nav_name"><a href="#">Research - Machine learning/datamining </a></li>
                    <li class="research_nav_name"><a href="#">Research interests - Heuristic search, planning and optimization</a></li>
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
   line-height: 26px;
   padding:30px 0 30px 90px;
   display: inline-block;
   width: 200px;
}
.research_nav_name{
    font-size: 18px;
    padding-top: 20px;
    a{

    }
    a:hover{
    }
}
.research_link{
    color: @timeColor;
    font-weight: bold;
    :hover{
        color: @highLightColor;
    }
}
.research_view{
   display: inline-block;
   background-color: antiquewhite;
   height: 300px;
   width: 918px;
}
</style>