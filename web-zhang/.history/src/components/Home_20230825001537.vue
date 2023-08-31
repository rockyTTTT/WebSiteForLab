<template>
    <div class="home">
        <div class="content">
            <!-- Research Area -->
            <div class="title">
                <span class="title_span">Research Area</span>
            </div>

            <div class="text_area">
                <ul>
                    <li>Genetics/Genomics:</li>
                    <p>Genetic architecture and transcriptome of complex traits and disease</p>
                </ul>
                <ul>
                    <li>Noncoding RNA:</li>
                    <p>Biogenesis and function of (small) noncoding transcript</p>
                </ul>
                <ul>
                    <li>Medical imaging:</li>
                    <p>Segmentation of tumors and organs at risk</p>
                </ul>
                <ul>
                    <li>Disease study:</li>
                    <p>Etiology and biomarker (e.g., cancer, neuronal and psychiatric disorders)</p>
                </ul>
                <ul>
                    <li>Big data analytics:</li>
                    <p>Novel algorithm for massive (biological) data analysis</p>
                </ul>
                <ul>
                    <li>Artificial intelligence:</li>
                    <p>Heuristic search, constraint satisfaction, and combinatorial optimization</p>
                </ul>
            </div>

            <!-- News -->
            <div class="title">
                <span class="title_span">News</span>
            </div>
            <div class="text_area">
                <span class="news_content">Shulan was promoted to <b> Senior Research Fellow </b> and took the position of <b> STEM Lab manager.</b></span>
                <span class="news_time">2023.8</span>
            </div>

            <div class="text_area">
                <span class="news_content">Weixiong was interviewed on <b> NOW NEWS, a Hong Kong TV news station </b>>, to discuss the newly funded RGC Strategic Target Grant (STG) funding on developing AI/genomic technologies to diagnose and treat major psychiatric disorders.</span>
                <span class="news_time">2023.8</span>
                <a href="https://news.now.com/home/local/player?newsId=526105&utm_source=nowNewsAppShare&utm_medium=referral" class="news_link"  target="_blank">[video1]</a>
            </div>

            <div class="text_area">
                <span class="news_content">Shulan was promoted to <b> Senior Research Fellow </b> and took the position of <b> STEM Lab manager.</b></span>
                <span class="news_time">2023.8</span>
            </div>

            <div class="text_area">
                <span class="news_content">Shulan was promoted to <b> Senior Research Fellow </b> and took the position of <b> STEM Lab manager.</b></span>
                <span class="news_time">2023.8</span>
            </div>

            <div class="text_area">
                <span class="news_content"></span>
                <span class="news_time">2023.8</span>
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
    padding-top: 20px;
    letter-spacing: 1px;
    padding-left: 90px;
    font-size: 18px;
    font-weight: lighter;
    color: @timeColor;
    padding-left: 90px;
    &:hover{
        color: @highLightColor;
    }
}
</style>