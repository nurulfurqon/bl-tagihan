<template>
  <div style="width: inherit; min-height: 100%; background: #fcfcfc;">
    <Header icon-left="ic_back" icon-right="ic_history" title="TV Kabel" />
    <div class="sp-v--53"></div>
    <Banner title="Hi, Burhanudin Yusuf !" text="Pilih layanan dan masukkan No. Pelanggan kamu ya."/>
    <div class="form-set">
      <div v-if="idLayanan === ''" @click="widthScreen = 0;" class="box-input">
        <div class="input-group" style="align-items: center;">
          <p class="text" style="flex: 1; color: #80868F !important; text-align: left;">Pilih Layanan TV Kabel</p>
          <img src="../assets/icons/ic_visibility_second.svg" style="height: 16px; margin-right: 6px;" />
        </div>
      </div>
      <div v-else @click="widthScreen = 0;" class="box-input">
        <div v-for="data in filterLayanan" :key="data.id" class="input-group" style="align-items: center;">
          <p class="text" style="flex: 1; text-align: left;">{{ data.name }}</p>
          <img :src="require(`../assets/icons/${data.logo}.png`)" style="margin-right: 4px;" :style="`width: ${data.sizeLogo}px;`" />
          <div class="sp-h--16"></div>
          <img src="../assets/icons/ic_visibility_second.svg" style="height: 16px; margin-right: 6px;" />
        </div>
      </div>
      <div class="sp-v--12"></div>
      <div class="box-input">
        <div class="input-group">
          <input v-numericOnly type="text" v-model="inputTelepon" class="input" name="" placeholder="No. Pelanggan TV Kabel" maxlength="12">
          <div class="sp-h--16"></div>
          <img class="icon" src="../assets/icons/account-card-details.png" />
        </div>
      </div>
      <div class="sp-v--12"></div>
    </div>
    <!-- Transaksi -->
    <div v-if="inputTelepon.length === 12 && idLayanan !== ''" class="transaksi">
      <div class="transaksi_header">
        <p class="title">Detail Transaksi</p>
      </div>
      <div class="transaksi_content">
        <div class="transaksi_content_text">
          <p class="text-first">Name</p>
          <p class="text-second">Burhanudin Yusuf</p>
        </div>

        <div class="transaksi_content_text">
          <p class="text-first">No. Pelanggan</p>
          <p class="text-second">{{ inputTelepon }}</p>
        </div>

        <div class="transaksi_content_text">
          <p class="text-first">Tagihan</p>
          <p class="text-second">Rp1.390.200</p>
        </div>

        <div class="transaksi_content_text">
          <p class="text-first">Biaya Admin</p>
          <p class="text-second">Rp2.500</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="transaksi_content">
        <div class="transaksi_content_text">
          <p class="text-first text-first--medium">TOTAL TAGIHAN</p>
          <p class="text-second text-second--medium">Rp1.390.200</p>
        </div>
        <router-link :to="`/checkout/${inputTelepon}/1.390.200`" class="button-link">
          <div class="button-bayar">
            <p class="text">Bayar</p>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Popup -->
    <Popup title="Promo Terbaru" icon="ic_voucherfill" :text="textPromo" kode="NONTONTERUS" />

    <!-- Search Media -->
    <div class="search-layanan" :style="`right: ${widthScreen}px`">
      <div class="search-layanan_header">
        <img @click="closeSearch()" src="../assets/icons/ic_back.svg" alt="Icon Back">
        <div class="sp-h--16"></div>
        <input type="text" name="" class="input-group" placeholder="Cari TV Kabel">
      </div>
      <div class="sp-v--58"></div>
      <div class="sp-v--8"></div>
      <div v-for="data in dataLayanan" :key="data.id" @click="idLayanan = data.id; closeSearch()" class="search-layanan_content">
        <div class="search-layanan_content_left">
          <img :src="require(`../assets/icons/${data.logo}.png`)" class="icon" alt="" />
        </div>
        <div class="search-layanan_content_right">
          <p class="text">{{ data.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import Popup from '../components/Popup.vue';

export default {
  name: 'tvkabel',
  data() {
    return {
      textPromo: 'Dapatkan cashback sebesar Rp10.000 setiap pembayaran TV Kabel. Berlaku di Aplikasi',
      inputTelepon: '',
      idLayanan: '',
      widthScreen: `-${window.innerWidth}`,
      dataLayanan: [
        {
          id: 1,
          name: 'CBN',
          logo: 'logo_cbn',
          sizeLogo: 22
        },
        {
          id: 2,
          name: 'BigTv',
          logo: 'logo_bigtv',
          sizeLogo: 22
        },
        {
          id: 3,
          name: 'First Media',
          logo: 'logo_first-media',
          sizeLogo: 22
        },
        {
          id: 4,
          name: 'Indihome',
          logo: 'logo_indihome',
          sizeLogo: 40
        },
        {
          id: 5,
          name: 'MNC Vision',
          logo: 'logo_vision',
          sizeLogo: 40
        },
        {
          id: 6,
          name: 'K-Vision',
          logo: 'logo_kvision',
          sizeLogo: 40
        },
        {
          id: 7,
          name: 'NexMedia',
          logo: 'logo_nextmedia',
          sizeLogo: 40
        },
        {
          id: 8,
          name: 'Transvision',
          logo: 'logo_transvision',
          sizeLogo: 40
        }
      ]
    };
  },
  components: {
    Header,
    Banner,
    Popup,
  },
  methods: {
    closeSearch() {
      this.widthScreen = `-${window.innerWidth}`;
    }
  },
  computed: {
    filterLayanan() {
      let value = this.idLayanan;
      return this.dataLayanan.filter((item) => {
        return item.id === value;
      });
    }
  },
  directives: {
    numericOnly: {
      bind(el, binding, vnode) {
        el.addEventListener('keydown', (e) => {
          if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
              // Allow: Ctrl+A
              (e.keyCode === 65 && e.ctrlKey === true) ||
              // Allow: Ctrl+C
              (e.keyCode === 67 && e.ctrlKey === true) ||
              // Allow: Ctrl+X
              (e.keyCode === 88 && e.ctrlKey === true) ||
              // Allow: home, end, left, right
              (e.keyCode >= 35 && e.keyCode <= 39)) {
              // let it happen, don't do anything
              return
          }
          // Ensure that it is a number and stop the keypress
          if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault()
          }
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-set {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
  margin-top: -25px;
  .box-input {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 12px 16px;
    background: #FFFFFF;
    border-radius: 6px;
    border: 1px solid #DFE3E9;
    .text {
      font-size: 14px;
      color: #25282F;
      letter-spacing: 0;
      line-height: 20px;
    }
    .icon {
      position: relative;
      width: 24px;
      height: 18px;
    }
    .icon2 {
      position: relative;
      width: 24px;
      height: 14px;
    }
    .input-group {
      display: flex;
      flex-direction: row;
      flex: 1;
      .input {
        width: 100%;
        outline: none;
        font-size: 14px;
        color: #52565F;
        letter-spacing: 0;
        padding: 0 4px;
      }
      input::placeholder {
        color: #80868F;
      }
    }
  }
}
.transaksi {
  position: relative;
  width: 100%;
  background: #fff;
  border-top: 12px solid #f1f2f5;
  box-sizing: border-box;
  &_header {
    position: relative;
    padding: 16px;
    border-bottom: 1px solid #f1f2f5;
    .title {
      text-align: left;
      font-size: 16px;
      font-weight: 600;
      color: #25282f;
      letter-spacing: 0;
      line-height: 20px;
    }
  }
  &_content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    padding: 12px 16px;

    &_text {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      padding: 4px 0;

      .text-first {
        font-size: 14px;
        color: #80868f;
        letter-spacing: 0;
        line-height: 18px;
        &--medium {
          font-weight: 600;
        }
      }
      .text-second {
        font-size: 14px;
        color: #25282f;
        letter-spacing: 0;
        text-align: right;
        line-height: 18px;
        &--medium {
          font-weight: 600;
        }
      }
    }
    .button-link {
      text-decoration: none;
      display: flex;
      margin: 12px 8px;
    }
    .button-bayar {
      width: 100%;
      border-radius: 6px;
      background: #ea5164;
      padding: 13px 16px;
      text-align: center;
      transition: all 0.3s ease;
      .text {
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
        letter-spacing: 0;
        text-align: center;
      }
      &:active {
        opacity: 0.7;
      }
    }
  }

  .line {
    height: 1px;
    margin: 0 16px;
    background: #f1f2f5;
  }
}

.search-layanan {
  position: absolute;
  top: 0;
  overflow: auto;
  width: 100%;
  height: 100%;
  background: #fcfcfc;
  transition: all .3s ease;
  z-index: 5555;
  &_header {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 8px 16px;
    background: #fff;
    border-bottom: 1px solid #E8EAEF;
    z-index: 6666;
    .icon-header {
      position: relative;
      width: 24px;
      height: 24px;
    }
    .input-group {
      width: 100%;
      border: none;
      outline: none;
      border-radius: 6px;
      font-size: 14px;
      color: #52565F;
      letter-spacing: 0;
      padding: 12px 16px;
      background: #F1F2F5;
    }
    input::placeholder {
      color: #ADB4BC;
    }
  }
  &_content {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    &_left {
      position: relative;
      padding: 0 16px;
      .icon {
        position: relative;
        width: 40px;
      }
    }
    &_right {
      position: relative;
      width: 100%;
      padding: 18px 0;
      border-bottom: 1px solid #E8EAEF;
      .text {
        text-align: left;
        font-size: 14px;
        color: #25282F;
        letter-spacing: 0;
        line-height: 20px;
      }
    }
  }
}
</style>
