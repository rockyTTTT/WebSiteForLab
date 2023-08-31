<template>
    <div class="research-content">
        <div class="publications_nav">
                <ul>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/publications/researchMonograph">Research Monograph</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/publications/journal">Selected Journal Publication</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="research_link" to="/research/machineLearning">Selected Peer-reviewed Conference Publication</RouterLink></li>
                </ul>
            </div>

        <div class="research-content">
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
.publications_nav_byYear{
   line-height: 26px;
   padding:30px 0 30px 90px;
   display: inline-block;
   width: 200px;
   height: 380px;
}
</style>