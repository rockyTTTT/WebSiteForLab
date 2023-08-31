<template>
    <div class="publications_content">
        <div class="publications_nav">
                <ul>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/all">ALL</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2023">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2023</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2022">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2022</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2021">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2021</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2020">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2020</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2019">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2019</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2018">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2018</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2017">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2017</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2016">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2016</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2015">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2015</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2014">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2014</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2013">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2013</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2012">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2012</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2011">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2011</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2010">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2010</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2009">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2009</RouterLink></li>
                        <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2008">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2008</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2007">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2007</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2006">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2006</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2005">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2005</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2004">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2004</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2001">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2001</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/2000">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2000</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/1996">
                        <span class="dot"><span class="indot"></span></span>&nbsp;1996</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/1995">
                        <span class="dot"><span class="indot"></span></span>&nbsp;1995</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/journal/1989">
                        <span class="dot"><span class="indot"></span></span>&nbsp;1989</RouterLink></li>
                </ul>
            </div>
            <router-view/>

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
    .router-link-exact-active{
        color: @highLightColor;
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
   height: 100px;
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