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
                <ul>
                    <li>Genetics/Genomics:</li>
                    <p>Genetic architecture and transcriptome of complex traits and disease</p>
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
.team{
    background-color: @intervalColor;
}
.team_statement{
    background: linear-gradient(270deg, #FFFFFF 0%, #EDF7FF 98%);
    display:flex;
    align-items: center;
    margin-bottom:4px;
    // padding-left: 40px;
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

</style>