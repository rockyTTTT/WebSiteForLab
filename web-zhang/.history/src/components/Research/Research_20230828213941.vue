<template>
    <div class="research">
        <div class="content" >
            <div class="research_nav">
                <ul>
                    <li class="title_span">Category</li>
                    <li class="research_nav_name"><RouterLink class="research_link" to="/research/fund">Fund</RouterLink></li>
                    <li class="research_nav_name"><RouterLink class="research_link" to="/research/biology">Research - Biology, genetics and genomics</RouterLink></li>
                    <li class="research_nav_name"><RouterLink class="research_link" to="/research/machineLearning">Research - Machine learning/datamining</RouterLink></li>
                    <li class="research_nav_name"><RouterLink class="research_link" to="/research/interests">Research interests - Heuristic search, planning and optimization</RouterLink></li>
                </ul>
            </div>
            <router-view ref="outerDom" @scroll="getScrollTop" />
        </div>
    </div>
    
    <div class="scrollBox" v-show="isShow" @click="goBack">
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
                isShow: true,
                scrollTrigger: false,
            };
        },
     computed:{},
     methods:{
        goBack() {
            let that = this; // 防止this指向问题
            // 防止频繁点击，故返回顶部后设置scrollTrigger为初始值
            if (that.scrollTrigger) {
                return;
            }
            // 获取当前距离顶部的距离
            let scrollTop = document.documentElement.scrollTop;
            console.log(scrollTop);
            let steep = 2;
            let timer = setInterval(() => {
                that.scrollTrigger = true;
                scrollTop -= steep;
                steep = 250;
                if (scrollTop <= 0) {
                clearInterval(timer);
                that.scrollTrigger = false;
                }
                document.documentElement.scrollTop = scrollTop;
            }, 20);
            },

        getScrollTop(e) {
            let that = this; 
            let clientHeight =
            document.documentElement.clientHeight || document.body.clientHeight;
            let scrollTop = e.srcElement.scrollTop;
            this.scrollTop = scrollTop;
            if (scrollTop > clientHeight) {
            that.isShow = true;
            } else {
            that.isShow = false;
            }
        },
     }   
    }
</script>

<style lang="less" scoped>
.research{
    background-color: @intervalColor;
    display: inline-block;
    padding-left: 144.5px;
    overflow-y: auto;
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
.scrollBox {
  position: fixed;
  right: 10px;
  bottom: 20px;
  font-size: 22px;
  z-index: 99;
}
.goTop{
    scroll-behavior: smooth;
    height: 100vh;
    overflow: auto;
    width: 122px;
    height: 60px;
    border: 1px solid @highLightColor;
    border-radius: 2px;
    margin-right: 10px;
    position: sticky;
    top: 400px;
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