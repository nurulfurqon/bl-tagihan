<template>
  <div style="width: inherit;">
    <Header icon-left="ic_back" icon-right="ic_history" title="Telkom" />
    <div class="sp-v--53"></div>
    <Banner title="Hi, Kevin !" text="Masukkan No. Indihome kamu ya"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue'

export default {
  name: 'home',
  components: {
    Header,
    Banner,
  },
};
</script>
