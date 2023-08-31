<template>
    <div class="home">
        <div class="content">

            <div class="title">
                <span class="title_span">Research Area</span>
            </div>

            <div class="research_area">
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
.content{
    width: 1208px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-top: 26px;
    padding-bottom: 26px;
}
.title{
    line-height: 26px;
    height: 26px;
    padding-left: 90px;
    padding-bottom: 20px;
}
.title_span{
    font-weight: bold;
    color: rgba(0, 0, 0, .85);
    font-size: 30px;
}
.research_area{
    background-color: #fff;
    ul{
        display: flex;
        padding-left: 90px;
        font-size: 24px;
        li{
            width: 500px;
        }
    }
}
</style>