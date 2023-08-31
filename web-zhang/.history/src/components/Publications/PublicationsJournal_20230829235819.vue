<template>
    <div class="publications_content">
        <div class="publications_nav">
                <ul>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/publications/researchMonograph">ALL</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/publications/researchMonograph">
                        <span class="dot"><span class="indot"></span></span>
                        2023
                    </RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/publications/journal">2022</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2021</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2020</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2019</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2018</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2017</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2016</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2015</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2014</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2013</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2012</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2011</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2009</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2008</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2007</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2006</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2005</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2004</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2001</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">2000</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">1996</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">1995</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">1989</RouterLink></li>
                </ul>
            </div>
            <div class="publications_content_year">
                <ul>
                    <li class="research_sentence"><b>·</b>&nbsp;&nbsp;[<span style="color: #F4B083;">AI</span>]<b>W. Zhang</b>, <i>State-Space Search: Algorithms, Complexity, Extensions, and Applications</i>, Springer-Verlag, New York, NY, 1999.</li>
                </ul>
            </div>

    </div>
 </template>

 <script>
    export default {

    }
</script>

<style lang="less" scoped>

.publications_content{
   float: right;
   background-color: #fff;
   height: auto;
   width: 908px;
   padding-top: 10px;
   padding-left: 10px;
}

.publications_nav_byYear{
    color: @timeColor;
    &:hover{
        .dot{
            background: @highLightColor;
        }
    }
}
.publications_nav{
   line-height: 26px;
   padding:0px 0 30px 10px;
   display: inline-block;
   width: 50px;
   height: auto;
}

.publications_content_year{
   float: right;
   background-color: #fff;
   height: auto;
   width: 848px;
   padding-top: 10px;
//    padding-left: 10px;
}

.dot{
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background: #e6e6e6;
    text-align: center;
    position: relative;
}
.indot{
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -3px;
    margin-top: -3px;
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

</style>