<template>
    <div class="research">
        <div class="content">
            <div class="research_nav">
                <ul>
                    <li class="title_span">Category</li>
                    <li class="research_nav_name"><a href="#">Fund</a></li>

                    <div class="layer">
                        <ul>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                    <li class="research_nav_name"><a href="#">Research - Biology, genetics and genomics</a></li>

                    <div class="layer"></div>
                    <li class="research_nav_name"><a href="#">Research - Machine learning/datamining </a></li>

                    <div class="layer"></div>
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
   width: 400px;
}
.research_nav_name{
    width: 200px;
    font-size: 18px;
    padding-top: 20px;
    a{
        color: @timeColor;
    }
    a:hover{
        color: @highLightColor;
    }
}
.research_view{
   display: inline-block;
}

.layer{
    width: 200px;
    height: 72px;
    background-color: bisque;
    // display: inline-block;
    float: right;
}
</style>