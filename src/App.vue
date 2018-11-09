<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/scss/base/_base.reset';
@import './assets/scss/base/_base.separator';
body {
  background: #f4f4f4;
}

#app {
  position: absolute;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #25282F;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}

.container {
  position: relative;
  overflow: hidden;
  width: 720px;
}

@media only screen and (max-width: 720px)  {
  .container {
    width: 100%;
  }
}

</style>
