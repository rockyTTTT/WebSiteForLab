<template>
    <div class="header-nav">
        <div class="header-content">
            <ul>
                <li><RouterLink class="link" to="/">Home</RouterLink></li>
                <li><RouterLink class="link" to="/research/fund">Research</RouterLink></li>
                <li><RouterLink class="link" to="/publications/statement">Publications</RouterLink></li>
                <li><RouterLink class="link" to="/team">Team</RouterLink></li>
                <li><RouterLink class="link" to="/joinUs/show">JoinUs</RouterLink></li>
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
    // height: 54px;
    width: 100%;
    // height: auto;
    .header-content{
        padding-top: 1%;
        padding-bottom: 1%;
    }
    ul {
        display: flex;
        // height: 100%;
        // line-height: 100%;
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
}

// .nav{
//     display: inline;
//     line-height: 64px;
//     padding-right: 48px;
//     padding-left: 48px;
//     font-size: 20px;
//     font-weight: bold;
//     color: #333;
//     a.router-link-exact-active{
//         color: #096dd9;
//     }
// }
// .link{
//     &:hover{
//         color: @highLightColor;
//     }
// }
</style>