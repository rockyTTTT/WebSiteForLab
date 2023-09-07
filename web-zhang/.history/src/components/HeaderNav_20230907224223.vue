<template>
    <div class="header-nav">
        <div class="header-content">
            <ul>
                <RouterLink class="link" to="/"><li>Home</li></RouterLink>
                <RouterLink class="link" to="/research/fund"><li>Research</li></RouterLink>
                <RouterLink class="link" to="/publications/statement"><li>Publications</li></RouterLink>
                <RouterLink class="link" to="/team"><li>Team</li></RouterLink>
                <RouterLink class="link" to="/joinUs/show"><li>Join us</li></RouterLink>
                <RouterLink class="link" to="/contact"><li>Contact</li></RouterLink>
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
    .header-content{
        padding-left: 15%;
    }
    ul {
        display: flex;
        height: 54px;
        line-height: 54px;
        // justify-content:center;
        li{
            a.router-link-exact-active{
                color: #096dd9;
            }
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