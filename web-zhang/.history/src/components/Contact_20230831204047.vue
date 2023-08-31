<template>
    <div class="team">
        <div class="content">
            <div style="height: 20px;">

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
    height: 50px;
}
.general-block-blue {
    width: 4px;
    height: 32px;
    background: #007bff;
    margin-left: 24px;
}

.team_member_statement{
    font-size: 24px;
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
    width: 350px;
}
.team_member_describe{
    float: right;
    padding-right: 120px;
    padding-top: 20px;
    li{
        padding-bottom: 15px;
    }
}

.team_member1_describe{
    float: right;
    padding-right: 432.35px;
    padding-top: 20px;
    li{
        padding-bottom: 15px;
    }
}

.team_member2_describe{
    float: right;
    padding-right: 489.03px;
    padding-top: 20px;
    li{
        padding-bottom: 15px;
    }
}

.team_member3_describe{
    float: right;
    padding-right: 428.94px;
    padding-top: 20px;
    li{
        padding-bottom: 15px;
    }
}
</style>