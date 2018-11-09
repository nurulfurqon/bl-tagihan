<template>
  <div class="header">
    <div class="header_content">
      <img v-if="iconLeft !== null" :src="require(`../assets/icons/${iconLeft}.svg`)" alt="Icon Back">
      <div class="sp-h--12"></div>
      <p v-if="title !== null" class="title-header">{{ title }}</p>
    </div>
    <div class="header_content">
      <img v-if="iconRight !== null" :src="require(`../assets/icons/${iconRight}.svg`)" alt="Icon History">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      iconLeft: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      iconRight: {
        type: String,
        default: null
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    width: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: #fff;
    border-bottom: 1px solid #E8EAEF;
    z-index: 999;

    &_content {
      position: relative;
      display: flex;
      flex-direction: row;
      .icon-header {
        position: relative;
        width: 24px;
        height: 24px;
      }
      .title-header {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
</style>