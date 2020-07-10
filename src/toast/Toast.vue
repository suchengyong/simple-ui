    
<template>
  <div class="wrap" v-if="showWrap" :class="showContent ?'fadein':'fadeout'">{{text}}</div>
</template>

<style scoped>
  .wrap{
    position: fixed;
    left: 50%;
    top:50%;
    background: rgba(0,0,0,.75);
    padding: 1rem 1.3rem;
    font-size:1rem;
    border-radius: 2rem;
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
