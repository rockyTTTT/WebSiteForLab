<template>
    <div class="team">
        <div class="content">
            <div style="height: 20px;">
            </div>
            <div class="team_statement">
                <div class="general-block-blue"></div>
                <div class="team_member_statement">LAB DIRECTOR</div>
            </div>

            <div class="text_area">
                <img class="team_img" src="https://genomicmedicine.github.io/site/picture/0/zhangweixiong.jpg">
                <ul class="team_member_describe">
                    <li>Zhang, Weixiong, PhD</li>
                    <li>章偉雄, 講座教授</li>
                    <li>Hong Kong Global STEM Professor</li>
                    <li>Chair Professor in Bioinformatics and Integrative Genomics</li>
                </ul>
            </div>

            <div class="team_statement">
                <div class="general-block-blue"></div>
                <div class="team_member_statement">LAB MANAGER</div>
            </div>

            <div class="text_area">
                <img class="team_img" src="https://genomicmedicine.github.io/site/picture/0/qiushulan.jpg">
                <ul class="team_member1_describe">
                    <li>Dr. Qiu, Shulan</li>
                    <li>Senior Research Fellow</li>
                    <li>Molecular biology</li>
                </ul>
            </div>

            <div class="team_statement">
                <div class="general-block-blue"></div>
                <div class="team_member_statement">RESEARCH ASSISTANT</div>
            </div>
            <div class="text_area">
                <img class="team_img" src="https://genomicmedicine.github.io/site/picture/0/qiuqian.jpg">
                <ul class="team_member2_describe">
                    <li>Qiu, Qian</li>
                    <li>Molecular biology</li>
                </ul>
            </div>

            <div class="text_area">
                <img class="team_img" src="https://genomicmedicine.github.io/site/picture/0/zhouxinyu.jpg">
                <ul class="team_member2_describe">
                    <li>Zhou, Xinyu</li>
                    <li>Molecular biology</li>
                </ul>
            </div>

            <div class="team_statement">
                <div class="general-block-blue"></div>
                <div class="team_member_statement">GRADUATE STUDENT</div>
            </div>

            <div class="text_area">
                <img class="team_img" src="https://genomicmedicine.github.io/site/picture/0/likang.jpg">
                <ul class="team_member2_describe">
                    <li>Li, Kang</li>
                    <li>Noncoding RNA</li>
                </ul>
            </div>

            <div class="text_area">
                <img class="team_img" src="	https://genomicmedicine.github.io/site/picture/-1/cb8c8acbc8b4434bafff9b194aa42607.png">
                <ul class="team_member2_describe">
                    <li>Wang, Weixu</li>
                    <li>Noncoding RNA</li>
                </ul>
            </div>

            <div class="text_area">
                <img class="team_img" src="https://genomicmedicine.github.io/site/picture/-1/aefe7dc241d943618cb706e8eb47af29.png">
                <ul class="team_member2_describe">
                    <li>Zhang, Fei</li>
                    <li>DNA Biomarker</li>
                </ul>
            </div>

            <div class="text_area">
                <img class="team_img" src="	https://genomicmedicine.github.io/site/picture/0/zhuyan.jpg">
                <ul class="team_member3_describe">
                    <li>Zhu, Yan</li>
                    <li>Computational biology</li>
                </ul>
            </div>

            <div class="team_statement">
                <div class="general-block-blue"></div>
                <div class="team_member_statement">UNDERGRADUATE STUDENT</div>
            </div>

            <div class="text_area">
                <img class="team_img" src="	https://genomicmedicine.github.io/site/picture/0/qinhaoning.jpg">
                <ul class="team_member2_describe">
                    <li>Qin, Haoning</li>
                    <li>Molecular biology</li>
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
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
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