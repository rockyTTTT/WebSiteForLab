<template>
    <div class="header-nav w">
        <ul>
            <li><RouterLink class="link" to="/">Home</RouterLink></li>
            <li><RouterLink class="link" to="/research/fund">Research</RouterLink></li>
            <li><RouterLink class="link" to="/publications/statement">Publications</RouterLink></li>
            <li><RouterLink class="link" to="/team">Team</RouterLink></li>
            <li><RouterLink class="link" to="/joinUs/show">Join us</RouterLink></li>
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
    // height: 62px;
    ul {
        display: flex;
        height: 54px;
        line-height: 54px;
        justify-content: flex-end;
        li{
            a.router-link-exact-active{
                color: #096dd9;
            }
            .link{
                font-size: 20px;
                font-weight: bold;
                color: #333;
                cursor: pointer;
                &:hover{
                    color: @highLightColor;
                }
            }
        }
    }
}
</style>