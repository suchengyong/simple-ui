<template>
  <div v-if="showWrap" class="toast_page">
    <div class="wrap"  :class="showContent ?'fadein':'fadeout'">{{text}}</div>
  </div>
</template>
<style scoped>
  .toast_page{
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.01);
    z-index:9999;
  }

  .wrap{
    position: fixed;
    left: 50%;
    top:50%;
    background: rgba(0,0,0,.75);
    padding: 10px 20px;
    font-size:16px;
    border-radius: 20px;
    transform: translate(-50%,-50%);
    color:#fff;
    text-align:center;
    width: fit-content;
    /* white-space: nowrap; */
    z-index:10000;
  }
  .fadein {
    animation: animate_in 0.25s;
  }
  .fadeout {
    animation: animate_out 0.25s;
    opacity: 0;
  }
  @keyframes animate_in {
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes animate_out {
    0% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>
