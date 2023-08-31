<template>
    <div class="contact">
        <div class="content">
            <div style="height: 20px;"></div>
            <div>
                <img src="https://genomicmedicine.github.io/site/picture/0/35cc31f6335d4e4db7bcc75ba37f67e5.jpg" class="contact_img">
                <div class="text_area">
                    <span class="contact_title">Address</span>
                    <br>
                    <span class="contact_content">The Hong Kong Polytechnic University Lee Shau Kee Building, Block Y520, Yuk Choi Rd, Hung Hom</span>
                </div>
            </div>

        </div>
    </div>
 </template>

 <script>
    export default {
    }
</script>

<style lang="less" scoped>
.contact{
    background-color: @intervalColor;
}
.contact_img{
    width: 650px;
}
.text_area{
    background-color: #fff;
    font-size: 20px;
    cursor: pointer;
    .hoverShadow();
    width: 500px;
    float:right;
}

.contact_title{
    font-size: 24px;
    font-weight: bold;
}

.contact_content{
    font-size: 20px;
}
</style>