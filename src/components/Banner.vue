<template>
  <div class="banner">
    <img class="img-banner" src="../assets/icons/bg_slide.png" alt="Banner slide">
    <div class="box-content-banner">
      <img class="bg-comment" src="../assets/icons/bg_box-comment.svg" />
      <img class="illustration-banner" src="../assets/icons/Illustration_Mas-Zaky.svg" alt="Illustration mas zaky">
      <div v-if="title !== null && text !== null" class="box-text">
        <p class="title">{{ title }}</p>
        <p class="text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    props: {
      title: {
        type: String,
        default: null
      },
      text: {
        type: String,
        defaul: null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    .img-banner {
      position: relative;
      width: 100%;
      height: 50%;
      object-fit: cover;
    }
    @media only screen and (max-width: 320px) {
      .img-banner {
        height: 140px;
      }
    }
    .box-content-banner {
      position: absolute;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      width: 298px;
      height: 110px;
      bottom: 0;
      margin-bottom: 13px;
    }
    .illustration-banner {
      position: relative;
      width: 117px;
      height: 109px;
    }
    .bg-comment {
      position: relative;
      width: 206px;
      height: 80px;
      margin-right: -25px;
    }
    .box-text {
      position: absolute;
      top: 17px;
      left: 25px;
      width: 160px;
      height: 55px;
      text-align: left;
      .title {
        font-size: 12px;
        line-height: 18px;
        font-weight: 700;
      }
      .text {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
</style>
