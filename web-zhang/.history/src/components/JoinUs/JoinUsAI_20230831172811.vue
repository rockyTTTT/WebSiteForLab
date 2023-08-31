<template>
    <div class="join_us">
        <div class="content">
            <div class="title">
                <span class="title_span">Current Available Positions</span>
            </div>

            <div class="text_area">
                <span class="join_content"><b>We are looking for young talents with background in <span style="color: #7030A0;"> Computer Science and Engineering, Math, Biology, Medicine, and related fields</span>. We have multiple positions available at all levels - <span style="color: #7030A0;">Research fellow, postdoc fellow, research assistant and PhD, MS, and undergraduate student</span>.</b></span>
                <span class="join_content"><b>Prospective applicants may sent inquiry to:</b>  weixiong.zhang [at] polyu.edu.hk</span>
            </div>

            <!-- News -->
            <div class="title">
                <span class="title_span">Example position</span>
            </div>

            <RouterLink to="/research/fund">
            <div class="text_area">
                <span class="join_content"><b>Post Specification for <span style="color: #4F81BD;">AI-related openning</span> </b></span>
                <span class="join_content1"><b>Postdoctoral Fellow / Research Associate / Research Assistant (under the Research Talent Hub of ITF projects) (three posts)</b> (Ref. 22012809)</span>
            </div>
            </RouterLink>

        </div>
    </div>
 </template>

 <script>
    export default {
    }
</script>

<style lang="less" scoped>
.join_us{
    background-color: @intervalColor;
}
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
.join_content{
        padding-top: 15px;
        display: inline-block;
        font-size: 20px;
        padding-left: 90px;
        letter-spacing: 1px;
}
.join_content1{
        padding-top: 15px;
        display: inline-block;
        font-size: 17px;
        padding-left: 90px;
        letter-spacing: 1px;
}
</style>