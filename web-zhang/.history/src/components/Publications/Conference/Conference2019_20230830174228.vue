<template>
    <div class="publications_content_year">
        <div class="publications_content">
            <ul>
                <li class="publications_sentence text_area"><b>·</b>&nbsp;&nbsp;[<span style="color: #4472C4;">ml/dm</span>]&nbsp;D. Jin, B. Li, P. Jiao, D. He and W. Zhang, Network-specific variational Auto-Encoder for embedding of attribute networks, Proc 28-th Intern. Joint Conf. on AI (IJCAI-19).</li>
                <li class="publications_sentence text_area"><b>·</b>&nbsp;&nbsp;[<span style="color: #4472C4;">ml/dm</span>]&nbsp;D. Jin, Z. Liu, W. Li, D. He and W. Zhang, Graph convolutional networks meet Markov Random Fields: Semi-supervised community detection in attribute networks, Proc 33-th AAAI Conf on AI (AAAI-19).</li>
            </ul>
        </div>
    </div>

 </template>

 <script>
    export default {
    }
</script>

<style lang="less" scoped>
.publications_content_year{
   float: right;
   background-color: #fff;
   height: auto;
   width: 848px;
   padding-top: 10px;
//    padding-left: 10px;
}

.text_area{
    cursor: pointer;
    .hoverShadow();
}
</style>