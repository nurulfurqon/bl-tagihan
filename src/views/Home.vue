<template>
  <div style="width: inherit; min-height: 100%; background: #fcfcfc;">
    <Header icon-left="ic_back" icon-right="ic_history" title="Telkom" />
    <div class="sp-v--53"></div>
    <Banner title="Hi, Burhanudin Yusuf !" text="Masukkan No. Indihome kamu ya"/>
    <div class="form-set">
      <router-link to="/tv" class="button-link">
        <div class="box-input">
          <p class="text">Indihome / Telepon</p>
        </div>
      </router-link>
      <div class="sp-v--12"></div>
      <div class="box-input">
        <div class="input-group">
          <input type="tel" @click="keyMonitor" @keyup.enter="$event.target.blur() + keyMonitorFix()" v-numericOnly v-model="inputTelepon" class="input" name="" placeholder="No Telepon" maxlength="12">
          <img v-if="inputTelepon == 141129110591" class="icon2" src="../assets/icons/telkom.png" />
          <div class="sp-h--16"></div>
          <img class="icon" src="../assets/icons/account-card-details.png" />
        </div>
      </div>
      <div class="sp-v--12"></div>
    </div>
    <!-- Transaksi -->
    <div v-if="inputTelepon == 141129110591" class="transaksi">
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
          <p class="text-first">Tagihan 1</p>
          <p class="text-second">Rp284.750</p>
        </div>

        <div class="transaksi_content_text">
          <p class="text-first">Tagihan 2</p>
          <p class="text-second">Rp284.750</p>
        </div>

        <div class="transaksi_content_text">
          <p class="text-first">Biaya Admin</p>
          <p class="text-second">Rp2.500</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="transaksi_content">
        <div class="transaksi_content_text">
          <p class="text-first text-first--medium">TOTAL</p>
          <p class="text-second text-second--medium">Rp459.750</p>
        </div>
        <router-link :to="`/checkout/${inputTelepon}/459.750`" class="button-link">
          <div class="button-bayar">
            <p class="text">Bayar</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="sp-v--58"></div>
    <!-- Popup -->
    <Popup :positionPopup="popUpState" title="Promo Terbaru" icon="ic_voucherfill" :text="textPromo" kode="BAYARTELKOM" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import Popup from '../components/Popup.vue';

export default {
  name: 'home',
  data() {
    return {
      textPromo: 'Dapatkan cashback sebesar Rp10.000 setiap pembayaran Telkom. Hanya berlaku di Aplikasi',
      inputTelepon: '',
      popUpState: 'fixed',
    };
  },
  components: {
    Header,
    Banner,
    Popup,
  },
  methods: {
    keyMonitor() {
      if (this.popUpState == 'fixed') {
        this.popUpState = 'absolute';
        console.log(this.popUpState)
      }
    },
    keyMonitorFix() {
      if (this.popUpState == 'absolute') {
        this.popUpState = 'fixed';
        console.log(this.popUpState);
      }
    }
  },
  created() {
    if (this.popUpState == 'absoulte') {
      this.popUpState = 'fixed';
    }
    console.log(this.popUpState);
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
  a {
    text-decoration: none !important;
  }
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
        border: none;
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
      p {
        text-decoration: none !important;
      }
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
</style>
