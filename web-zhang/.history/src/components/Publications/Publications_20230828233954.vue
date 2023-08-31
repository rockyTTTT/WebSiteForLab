<template>
    <div class="publications">
        <div class="content">
            <div class="publications_nav">
                <ul>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/fund">ALL</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/fund">Fund</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/fund">Fund</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/fund">Fund</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/fund">Fund</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/fund">Fund</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/fund">Fund</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/fund">Fund</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/fund">Fund</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/fund">Fund</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/biology">Research - Biology, genetics and genomics</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/machineLearning">Research - Machine learning/datamining</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/research/interests">Research interests - Heuristic search, planning and optimization</RouterLink></li>
                </ul>
            </div>
            <router-view/>
        </div>
    </div>

    <div class="goTop" id = "goTop" @click="goBack">
    <a href="#top">
        <div>
            <i class="iconfont icon-top research_icon"></i>
            <div class="goTop_font">Top</div>
        </div>
    </a>
    </div>
 </template>

 <script>
    export default {
        data(){
            return{
                scrollTop: 0,
                isShow: false,
                scrollTrigger: false,
            };
        },
     computed:{},
     methods:{
        goBack() {
            // 获取当前距离顶部的距离
            let scrollTop = document.documentElement.scrollTop;
            let steep = scrollTop / 2000;
            let timer = setInterval(() => {
                scrollTop -= steep;
                steep = 200;
                if (scrollTop <= 0) {
                clearInterval(timer);
                }
                document.documentElement.scrollTop = scrollTop;
            }, 10);
            }
     }
    }
    window.onscroll = function(){
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let scrollTop = document.documentElement.scrollTop;
        let goTop = document.getElementById('goTop');
        console.log('clientHeight',clientHeight);
        console.log('scrollTop',scrollTop);
        console.log('goTop',goTop);
        if (scrollTop > clientHeight) {
            goTop.style.visibility = "visible";
        } else {
            goTop.style.visibility = "hidden";
        }
    }
</script>

<style lang="less" scoped>
.publications{
    background-color: @intervalColor;
    display: inline-block;
    padding-left: 144.5px;
    overflow-y: auto;
}
.publications_nav{
   line-height: 26px;
   padding:30px 0 30px 90px;
   display: inline-block;
   width: 200px;
   height: 380px;
}
.publications_nav_name{
    font-size: 18px;
    padding-top: 5px;
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
    height: 100px;
    overflow: auto;
    width: 122px;
    height: 60px;
    border: 1px solid @highLightColor;
    border-radius: 2px;
    margin-right: 10px;
    position: sticky;
    top: 200px;
    right: 5px;
    &:hover{
        background-color: #096dd9;
        i{
            color: #fff;
        }
        .goTop_font{
            color: #fff;
        }
    }
}
.research_icon{
    font-size: 30px;
    color: @highLightColor;
    padding-left: 35%;
}
.goTop_font{
    color: @highLightColor;
    letter-spacing: 3px;
    font-size: 16px;
    padding-left: 35%;
}

</style>