<template>
    <div class="team">
        <div class="content">
            <!-- Research Area -->
            <div class="title">
                <span class="title_span">Members of the Genome Medicine Lab</span>
            </div>
            <div class="team_statement w">
                <div class="general-block-blue"></div>
                <div style="font-size: 24px;margin-left: 4px;">负责人</div>
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
    padding-left: 20px;
}
.general-block-blue {
    width: 4px;
    height: 18px;
    background: #007bff;
    margin-left: 24px;
}
</style>