<template>
    <div class="header-nav">
        <div class="w">
            <ul>
                <li><RouterLink class="link" to="/">Home</RouterLink></li>
                <li><RouterLink class="link" to="/research">Research</RouterLink></li>
                <li><RouterLink class="link" to="/publications">Publications</RouterLink></li>
                <li><RouterLink class="link" to="/team">Team</RouterLink></li>
                <li><RouterLink class="link" to="/join_us">Join us</RouterLink></li>
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
                color: #096dd9;
                border-bottom: 4px solid #096dd9;
            }
            .link{
                font-size: 20px;
                font-weight: bold;
                color: #333;
                padding: 12px 36px;
                cursor: pointer;
                &:hover{
                    color: #096dd9;
                }
            }
        }
    }
}
</style>