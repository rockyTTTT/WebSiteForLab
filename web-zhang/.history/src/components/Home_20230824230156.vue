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
                <span>Shulan was promoted to <b>Senior Research Fellow </b> and took the position of STEM Lab manager.</span>
                <span>2023.8</span>
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
    padding-bottom: 20px;
    font-size: 20px;
    cursor: pointer;
    ul{
        display: flex;
        padding-left: 90px;
        li{
            width: 400px;
        }
        padding-top: 20px;
    }
    span{
        display: flex;
        padding-left: 90px;
    }
    .hoverShadow();
}
</style>