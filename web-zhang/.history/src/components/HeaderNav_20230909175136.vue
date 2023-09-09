<template>
    <div class="header-nav">
            <ul class="header-ul">
                <li><RouterLink class="link" to="/">Home</RouterLink></li>
                <li><RouterLink class="link" to="/research/fund">Research</RouterLink></li>
                <li><RouterLink class="link" to="/publications/statement">Publications</RouterLink></li>
                <li><RouterLink class="link" to="/team">Team</RouterLink></li>
                <li><RouterLink class="link" to="/joinUs/show">JoinUs</RouterLink></li>
                <li><RouterLink class="link" to="/contact">Contact</RouterLink></li>
            </ul>
        </div>
 </template>

 <script>
    export default {

    }
</script>

<style lang="less" scoped>
.header-nav{
    background-color: @navColor;
    border-radius: 5px;
    max-height: 54px;
    min-height: 54px;
    position: relative;
}

.header-ul {
    // padding-top: 14px;
    // padding-bottom: 14px;
    display: flex;
    position: absolute;
    left: 135px;
    justify-content:center;
    li{
        a.router-link-exact-active{
            color: #096dd9;
        }
        .link{
            font-size: 20px;
            font-weight: bold;
            color: #333;
            padding-left: 48px;
            padding-right: 48px;
            cursor: pointer;
            &:hover{
                color: @highLightColor;
            }
        }
    }
}
</style>