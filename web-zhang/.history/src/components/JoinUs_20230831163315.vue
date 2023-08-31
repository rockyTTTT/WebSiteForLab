<template>
    <div class="join_us">
        <div class="content">
            <div class="title">
                <span class="title_span">Current Available Positions</span>
            </div>

            <div class="text_area">
                <span class="news_content">We are looking for young talents with background in Computer Science and Engineering, Math, Biology, Medicine, and related fields. We have multiple positions available at all levels - Research fellow, postdoc fellow, research assistant and PhD, MS, and undergraduate student.</span>
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
                <span class="news_time">2023.7</span>
                <a href="https://news.now.com/home/local/player?newsId=526105&utm_source=nowNewsAppShare&utm_medium=referral" class="news_link"  target="_blank">[link to the video 1]</a>
                <a href="https://news.now.com/home/local/player?newsId=526106&utm_source=nowNewsAppShare&utm_medium=referral" class="news_link"  target="_blank">[link to the video 2]</a>
            </div>

            <div>
            <a href="https://www.polyu.edu.hk/media/media-releases/2023/0719_polyu-awarded-rgc-strategic-topics-grant-to-address-societal-needs-in-mental-healthcare/" target="_blank">
            <div class="text_area">
                <span class="news_content">Weixiong, as project PC, received <b> RGC Strategic Target Grant (STG) funding </b> (five years and $37 million) to develop AI, genomic and biomedical technologies for developing genetic and neuroimaging markers and integrative approaches for objective diagnosis and personalized therapy of major psychiatric disorders, including <u>depression</u>, <u>schizophrenia</u>,<u>and bipolar disorder</u>.</span>
                <span class="news_time">2023.7</span>
            </div>
            </a>
            </div>

            <div>
            <a href="https://www.cell.com/iscience/fulltext/S2589-0042(23)01373-1" target="_blank">
            <div class="text_area">
                <span class="news_content">Our paper on <b> cancer-keeper genes as therapeutic targets </b> published online with iScience, a Cell Press journal.</span>
                <span class="news_time">2023.7</span>
            </div>
            </a>
            </div>

            <div class="text_area">
                <span class="news_content">Dr. Qiu Shulan joined the lab as <b>Research Fellow.</b></span>
                <span class="news_time">2022.7</span>
            </div>

            <div class="text_area">
                <span class="news_content">Weixiong received <b> Health and Medical Research Fund </b> (HMRF, three years and $1.4 million) to study <u> schizophrenia </u> using systems biology approaches.</span>
                <span class="news_time">2022.5</span>
            </div>

        </div>
    </div>
 </template>

 <script>
    export default {
    }
</script>

<style lang="less" scoped>
.join_us{
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