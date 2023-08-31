<template>
    <div class="home">
        <div class="content">
            <!-- Research Area -->
            <div class="title">
                <span class="title_span">Members of the Genome Medicine Lab</span>
            </div>

        
        </div>
    </div>
 </template>

 <script>
    export default {
    }
</script>

<style lang="less" scoped>
.home{
    background-color: @intervalColor;
}
.text_area{
    background-color: #fff;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-size: 20px;
    cursor: pointer;
    ul{
        display: flex;
        padding-left: 90px;
        li{
            width: 400px;
        }
        padding-top: 20px;
        &:last-child {
            padding-bottom: 20px
        }
    }
    .hoverShadow();
}
.news_content{
        padding-top: 15px;
        display: inline-block;
        font-size: 20px;
        padding-left: 90px;
        letter-spacing: 1px;
}
.news_time{
    padding-top: 15px;
    display: flex;
    letter-spacing: 1px;
    padding-left: 90px;
    font-size: 18px;
    font-weight: lighter;
    color: @timeColor;
}

.news_link{
    letter-spacing: 1px;
    padding-left: 90px;
    font-size: 18px;
    font-weight: lighter;
    color: @timeColor;
    &:hover{
        color: @highLightColor;
    }
}
</style>