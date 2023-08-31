<template>
    <div class="home">
        <div class="content">
            <!-- Research Area -->
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

            <!-- News -->
            <div class="title">
                <span class="title_span">News</span>
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
.research_area{
    background-color: #fff;
    padding-top: 15px;
    padding-bottom: 15px;
    cursor: pointer;
    ul{
        display: flex;
        padding-left: 90px;
        font-size: 20px;
        li{
            width: 400px;
        }
        padding-top: 20px;
    }
    .hoverShadow();
}
</style>