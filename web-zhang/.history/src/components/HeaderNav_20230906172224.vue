<template>
    <div class="header-nav">
        <div class="w">
            <ul>
                <li><RouterLink class="link" to="/">Home</RouterLink></li>
                <li><RouterLink class="link" to="/research/fund">Research</RouterLink></li>
                <li><RouterLink class="link" to="/publications/statement">Publications</RouterLink></li>
                <li><RouterLink class="link" to="/team">Team</RouterLink></li>
                <li><RouterLink class="link" to="/joinUs/show">Join us</RouterLink></li>
                <li><RouterLink class="link" to="/contact">Contact</RouterLink></li>
            </ul>
        </div>
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
    ul {
        display: flex;
        height: 54px;
        line-height: 54px;
        justify-content: left;
        li{
            .router-link-exact-active{
                color: #fff;
                border-bottom: 4px solid @highLightColor;
            }
            .link{
                font-size: 20px;
                font-weight: bold;
                color: #333;
                padding: 12px 48px;
                cursor: pointer;
                &:hover{
                    color: @highLightColor;
                }
            }
        }
    }
}
</style>