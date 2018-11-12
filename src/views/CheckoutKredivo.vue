<template>
  <div style="width: inherit; min-height: 100%; background: #fcfcfc;">
    <Header icon-left="ic_back" title="Detail Transaksi" />
    <div class="sp-v--53"></div>
    <div class="line--12"></div>
    <div class="card">
      <div class="card_header">
        <p class="title">Detail Pembayaran</p>
      </div>
      <div class="card_content">
        <div class="card_content_text">
          <p class="text-left">No. Kontrak</p>
          <p class="text-right">{{ $route.params.id }}</p>
        </div>
        <div class="sp-v--8"></div>
        <div class="card_content_text">
          <p class="text-left">Nama</p>
          <p class="text-right">Burhanudin Yusuf</p>
        </div>
        <div class="sp-v--8"></div>
        <div class="card_content_text">
          <p class="text-left">Tagihan</p>
          <p class="text-right">Rp{{ $route.params.jumlah }}</p>
        </div>
        <div class="sp-v--8"></div>
        <div class="card_content_text">
          <p class="text-left">Biaya Admin</p>
          <p class="text-right">Rp2.500</p>
        </div>
      </div>
    </div>
    <div class="line--12"></div>
    <div class="card">
      <div class="card_header">
        <p class="title">Voucher</p>
      </div>
      <div class="card_content">
        <div class="box-kode-promo">
          <div class="content-left">
            <img src="../assets/icons/ic_kode-promo.svg" alt="icon voucher" class="icon">
            <input type="text" name="" class="input-kode" v-model="kodePromo" placeholder="Masukan Kode Promo" maxlength="15">
          </div>
          <div @click="useKode" class="content-right">
            <p>Pakai</p>
          </div>
        </div>
        <span v-if="showNotif" class="text-notif">{{ infoPromo }}</span>
      </div>
    </div>
    <div class="line--12"></div>
    <div class="card-second">
      <div class="card-second_content">
        <p class="title">Metode Pembayaran</p>
        <p class="text">Transfer Virtual Account BCA</p>
      </div>
      <div class="card-second_content-second">
        <img src="../assets/icons/bca.png" style="height: 11px; margin-right: 12px;" alt="Bank BCA">
        <img src="../assets/icons/ic_keyboard_arrow_right.svg" />
      </div>
    </div>
    <div class="card" style="position: absolute; bottom: 0;">
      <div class="card_content">
        <div class="card_content_text">
          <p class="text-right" style="font-weight: 600;">Total Pembayaran</p>
          <p class="text-right" style="font-weight: 600;">Rp{{ formatRp(Number($route.params.jumlah) + 2500) }}</p>
        </div>
        <div class="sp-v--12"></div>
        <div class="button-bayar">
          <p class="text">Bayar Sekarang</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: 'CheckoutKredivo',
  data() {
    return {
      kodePromo: '',
      infoPromo: '',
      showNotif: false,
    }
  },
  components: {
    Header,
  },
  methods: {
    useKode() {
      if(this.kodePromo.length > 1) {
        if(this.kodePromo === 'BAYARTELKOM' || this.kodePromo === 'NONTONTERUS') {
          this.showNotif = true;
          this.infoPromo = 'Potongan CASHBACK Rp10.000';
        } else if (this.kodePromo === 'KREDIVOHEMAT'){
          this.showNotif = true;
          this.infoPromo = 'Mendapatkan potongan 50%';
        } else {
          this.showNotif = true;
          this.infoPromo = 'Kode Promo Salah!';
        }
      }
    },
    formatRp(value) {
      
        return value.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.");
      
    }
  }
};
</script>

<style lang="scss" scoped>
  .line--12 {
    position: relative;
    width: 100%;
    height: 12px;
    background: #fcfcfc;
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 16px;
    background: #FFFFFF;
    border-top: 1px solid #E8EAEF;
    border-bottom: 1px solid #E8EAEF;
    box-shadow: 0 1px 4px -3px rgba(0,0,0,0.50);
    &_header {
      position: relative;
      text-align: left;
      margin-bottom: 16px;
      .title {
        font-size: 16px;
        font-weight: 600;
        color: #25282F;
        letter-spacing: 0;
        line-height: 20px;
      }
    }
    &_content {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      &_text {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        .text-left {
          font-size: 14px;
          color: #999999;
          letter-spacing: 0;
          line-height: 18px;
        }
        .text-right {
          font-size: 14px;
          color: #25282F;
          letter-spacing: 0;
          text-align: right;
          line-height: 18px;
        }
      }
    }
  }
  .box-kode-promo {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background: #FFFFFF;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid #DFE3E9;
    border-radius: 6px;
    .content-left {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      padding: 10px 16px;
      background: #ffffff;
      .icon {
        position: relative;
        width: 24px;
        height: 24px;
      }
      .input-kode {
        width: 100%;
        outline: none;
        border: none;
        font-size: 14px;
        color: #52565F;
        letter-spacing: 0;
        line-height: 20px;
        padding: 0 4px;
      }
      input::placeholder {
        color: #80868F;
      }
    }
    .content-right {
      display: flex;
      background: #F1F2F5;
      padding: 10px 20px;
      p {
        font-size: 16px;
        font-weight: 600;
        color: #25282F;
        letter-spacing: 0;
        text-align: center;
        line-height: 24px;
      }
    }
  }
  .text-notif {
    margin-top: 8px;
    text-align: left;
    font-size: 12px;
    color: #287C57;
    letter-spacing: 0;
    line-height: 18px;
  }
   .card-second {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 16px;
    background: #FFFFFF;
    border-top: 1px solid #E8EAEF;
    border-bottom: 1px solid #E8EAEF;
    box-shadow: 0 1px 4px -3px rgba(0,0,0,0.50);
    &_content {
      display: flex;
      flex-direction: column;
      .title {
        text-align: left;
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 600;
        color: #25282F;
        letter-spacing: 0;
        line-height: 20px;
      }
      .text {
        text-align: left;
        font-size: 14px;
        color: #25282F;
        letter-spacing: 0;
        line-height: 20px;
      }
    }
    &_content-second {
      display: flex;
      flex-direction: row;
      align-items: center;
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
</style>
