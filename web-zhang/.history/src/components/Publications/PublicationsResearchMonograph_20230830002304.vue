<template>
    <div class="text_area"></div>
    <div class="research-content">
        <ul>
            <li class="research_sentence"><b>·</b>&nbsp;&nbsp;[<span style="color: #F4B083;">AI</span>]<b>W. Zhang</b>, <i>State-Space Search: Algorithms, Complexity, Extensions, and Applications</i>, Springer-Verlag, New York, NY, 1999.</li>
        </ul>
    </div>
 </template>

 <script>
    export default {
        
    }
</script>

<style lang="less" scoped>
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
</style>