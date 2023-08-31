<template>
    <div class="publications_content">
        <div class="publications_nav">
                <ul>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/researchMonograph">ALL</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal_2023">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2023</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2022</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2021</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2020</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2019</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2018</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2017</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2016</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2015</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2014</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2013</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2012</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2011</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2009</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2008</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2007</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2006</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2005</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2004</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2001</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2000</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;1996</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;1995</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/research/machineLearning">
                        <span class="dot"><span class="indot"></span></span>&nbsp;1989</RouterLink></li>
                </ul>
            </div>
            <router-view/>
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
    padding-top: 8px;
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


.publications_link{
    color: @timeColor;
    font-size: 15px;
    font-weight: bold;
    &:hover{
        color: @highLightColor;
    }
}

</style>