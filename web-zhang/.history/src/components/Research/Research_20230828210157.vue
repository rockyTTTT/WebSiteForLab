<template>
    <div class="outerBox" ref="outerDom" @scroll="getScrollTop">
      <div v-for="item in 100" :key="item">页面内容{{item}}</div>
      <div class="scrollBox" v-show="isShow" @click="goBack">⬆️</div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        scrollTop: 0, //默认距离顶部的距离
        isShow: false, //控制返回顶部按钮的显隐
        scrollTrigger: false, //默认初始值
      };
    },
    computed: {},
    methods: {
      // 返回顶部事件
      goBack() {
        let that = this; // 防止this指向问题
        // 防止频繁点击，故返回顶部后设置scrollTrigger为初始值
        if (that.scrollTrigger) {
          return;
        }
        // 获取当前距离顶部的距离
        let scrollTop = this.scrollTop;
        console.log(scrollTop);
        let steep = scrollTop / 2000;
        let timer = setInterval(() => {
          that.scrollTrigger = true;
          // 滚动的速度逐渐变快，第一次走2000/1，然后减去已走的距离，下一次用剩下的距离再减去步进值，步进值也是不断变化，这样速度会越来越快
          scrollTop -= steep;
          // 步进值不改变的话会匀速缓慢上滑，不断增加步进值上滑的距离增加，视觉效果速度变快
          steep += 20;
          if (scrollTop <= 0) {
            clearInterval(timer);
            that.scrollTrigger = false;
          }
          that.$refs.outerDom.scrollTop = scrollTop;
        }, 30);
      },
      // 监听滚动条
      getScrollTop(e) {
        let that = this; // 防止this指向问题
        // 设备一屏的高度
        let clientHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        let scrollTop = e.srcElement.scrollTop;
        this.scrollTop = scrollTop;
        // 判断距离顶部多少显示回到顶部图标
        if (scrollTop > clientHeight) {
          that.isShow = true;
        } else {
          that.isShow = false;
        }
      },
    },
  };
  </script>
  <style scoped>
  /* 最外层盒子样式 */
  .outerBox {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
    padding:4px 6px;
  }
  /* 返回顶部样式 */
  .scrollBox {
    position: fixed;
    right: 10px;
    bottom: 20px;
    font-size: 22px;
    z-index: 99;
  }
  /* 浏览器滚动条样式 */
  ::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(174, 174, 174);
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  </style>
  