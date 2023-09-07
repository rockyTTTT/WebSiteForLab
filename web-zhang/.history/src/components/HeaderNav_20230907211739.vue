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
        height: 56px;
        line-height: 56px;
        justify-content: left;
        li{
            a.router-link-exact-active{
                border-bottom: 4px solid @highLightColor;
                color: #096dd9;
            }
            .link{
                font-size: 20px;
                font-weight: bold;
                color: #333;
                padding: 8px 48px;
                cursor: pointer;
                &:hover{
                    color: @highLightColor;
                }
            }
        }
    }
}
</style>