<template>
    <div class="publications">
        <div class="content">
            <div class="publications_nav">
                <ul>
                    <li class="title_span"><RouterLink class="research_link" to="/publications/statement">Representative Publications<p style="font-weight: normal;">(Total>200)</p></RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/publications/researchMonograph">Research Monograph</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/publications/journal/all">Selected Journal Publication</RouterLink></li>
                    <li class="publications_nav_name"><RouterLink class="research_link" to="/publications/peer-reviewed/all">Selected Peer-reviewed Conference Publication</RouterLink></li>
                </ul>
            </div>
            <router-view/>
        </div>
        <div class="goTop" id = "goTop" @click="goBack">
        <div>
            <i class="iconfont icon-top research_icon"></i>
            <div class="goTop_font">Top</div>
        </div>
    </div>
    </div>


 </template>

 <script>
    export default {
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
        if(goTop != null){
            if (scrollTop > clientHeight) {
            goTop.style.visibility = "visible";
            } else {
                goTop.style.visibility = "hidden";
            }
        }

    }
</script>

<style lang="less" scoped>

.publications{
    width: 100%;
    background-color: @intervalColor;
    display: inline-block;
}
.publications_nav{
   line-height: 26px;
   padding:30px 0 30px 7%;
   display: inline-block;
   width: 200px;
   height: 380px;
}
.publications_nav_name{
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
    height: 100px;
    overflow: auto;
    // float: right;
    width: 122px;
    height: 60px;
    border: 1px solid @highLightColor;
    border-radius: 2px;
    margin-right: 10px;
    position: sticky;
    top: 40%;
    left: 90.5%;
    visibility: hidden;
    cursor: pointer;
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