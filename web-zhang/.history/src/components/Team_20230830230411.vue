<template>
    <div class="team">
        <div class="content">
            <!-- Research Area -->
            <div class="title">
                <span class="title_span">Members of the Genome Medicine Lab</span>
            </div>
            <div class="team_statement">
                <div class="general-block-blue"></div>
                <div class="team_member_statement">LAB DIRECTOR</div>
            </div>
            <div class="text_area">
                <img class="team_img" src="https://genomicmedicine.github.io/site/picture/0/zhangweixiong.jpg">
                <span>123123123123123</span>
            </div>
        </div>
    </div>
 </template>

 <script>
    export default {
    }
</script>

<style lang="less" scoped>
.team{
    background-color: @intervalColor;
}
.team_statement{
    background: linear-gradient(270deg, #FFFFFF 0%, #EDF7FF 98%);
    display:flex;
    align-items: center;
    margin-left: 90px;
}
.general-block-blue {
    width: 4px;
    height: 18px;
    background: #007bff;
    margin-left: 24px;
}

.team_member_statement{
    font-size: 22px;
    margin-left: 4px;
}

.text_area{
    background-color: #fff;
    padding-bottom: 10px;
    margin-left: 90px;
    margin-bottom: 15px;
    font-size: 20px;
    cursor: pointer;
    .hoverShadow();
}

.team_img{
    width: 400px;
}
</style>