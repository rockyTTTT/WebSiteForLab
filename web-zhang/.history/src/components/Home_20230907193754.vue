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
                <ul>
                    <div class="news_time">2023.8</div>
                    <div class="news_content">Shulan was promoted to <b> Senior Research Fellow </b> and took the position of <b> STEM Lab manager.</b></div>
                </ul>
            </div>


            <div class="text_area">
                <ul>
                    <div class="news_time">2023.7</div>
                    <div class="news_content">Weixiong was interviewed on <b> NOW NEWS, a Hong Kong TV news station </b>>, to discuss the newly funded RGC Strategic Target Grant (STG) funding on developing AI/genomic technologies to diagnose and treat major psychiatric disorders.</div>
                </ul>
                <div>
                <a href="https://news.now.com/home/local/player?newsId=526105&utm_source=nowNewsAppShare&utm_medium=referral" class="news_link"  target="_blank">[link to the video 1]</a>
                <a href="https://news.now.com/home/local/player?newsId=526106&utm_source=nowNewsAppShare&utm_medium=referral" class="news_link"  target="_blank">[link to the video 2]</a>
                </div>
            </div>

            <div>
            <a href="https://www.polyu.edu.hk/media/media-releases/2023/0719_polyu-awarded-rgc-strategic-topics-grant-to-address-societal-needs-in-mental-healthcare/" target="_blank">
            <div class="text_area">
                <ul>
                    <div class="news_time">2023.7</div>
                    <div class="news_content">Weixiong, as project PC, received <b> RGC Strategic Target Grant (STG) funding </b> (five years and $37 million) to develop AI, genomic and biomedical technologies for developing genetic and neuroimaging markers and integrative approaches for objective diagnosis and personalized therapy of major psychiatric disorders, including <u>depression</u>, <u>schizophrenia</u>,<u>and bipolar disorder</u>.</div>
                </ul>
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
.home{
    background-color: @intervalColor;
}
.text_area{
    background-color: #fff;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-size: 20px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
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
        display: inline-block;
        font-size: 20px;
        letter-spacing: 1px;
        padding-right: 10px;
        margin-top: auto;
        margin-bottom: auto;    
}

.news_content_link{
        display: inline-block;
        font-size: 20px;
        letter-spacing: 1px;
        color:@navColor;
}
.news_time{
    display: flex;
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: lighter;
    color: @timeColor;
    padding-right: 180px;
    height: 40px;
    line-height: 40px;
    margin-top: auto;
    margin-bottom: auto;
}

.news_link{
    letter-spacing: 1px;
    padding-left: 350px;
    font-size: 18px;
    font-weight: lighter;
    color: @timeColor;
    &:hover{
        color: @highLightColor;
    }
}
</style>