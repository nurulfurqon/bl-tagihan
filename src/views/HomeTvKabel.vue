<template>
<div>
  <div class="wrapper-content">
    <div class="wrapper-content_item-row">
      <img src="../assets/icons/dompet.png" style="width: 118px; height: 24px" alt="" />
      <img src="../assets/icons/menu.png" style="width: 140px; height: 29px" alt="" />
    </div>
    <div class="sparator-16"></div>
    <img src="../assets/icons/search-bar.png" style="width: 328px; height: 40px" alt="" />
    <div class="sparator-16"></div>
    <img src="../assets/icons/smart-card.png" style="height:63px" alt="" />
  </div>
  <div class="sparator"></div>
  <div class="wrapper-content-two">
    <div class="wrapper-content-two_item-row">
      <div class="box-item">
        <img class="image" src="../assets/icons/flash-deal.svg" alt="" />
        <p class="text">Flash Deals</p>
      </div>
      <div class="box-item">
        <img class="image" src="../assets/icons/ongkir.svg" alt="" />
        <p class="text">Gratis Ongkir</p>
      </div>
      <div class="box-item">
        <img class="image" src="../assets/icons/promo.svg" alt="" />
        <p class="text">Special Promo</p>
      </div>
      <div class="box-item">
        <img class="image" src="../assets/icons/favorit.svg" alt="" />
        <p class="text">Favorit Barang</p>
      </div>
    </div>
  </div>
  <div class="sparator"></div>
  <div class="wrapper-content">
    <div class="wrapper-content_item-row">
      <p class="title">Spesial Untukmu</p>
      <p class="span">Lihat Semua</p>
    </div>
    <div class="sparator-16"></div>
    <img src="../assets/icons/banner-promo.png" style="width: 328px; height: 130px" alt="" />
  </div>
  <div class="sparator"></div>
  <div class="wrapper-content">
    <div class="wrapper-content_item-row">
      <p class="title">Produk Virtual</p>
      <p class="span">Lihat Semua</p>
    </div>
    <div class="sparator-16"></div>
    <div class="wrapper-content_item-row">
      <div class="box-item">
        <img class="image" src="../assets/icons/bukaemas.svg" alt="" />
        <p class="text">BukaEmas</p>
      </div>
      <div class="box-item">
        <img class="image" src="../assets/icons/tv.svg" alt="" />
        <p class="text">Siaran TV</p>
      </div>
      <div class="box-item">
        <img class="image" src="../assets/icons/pesawat.svg" alt="" />
        <p class="text">Pesawat</p>
      </div>
      <router-link to="/tv" class="button-link" style="text-decoration: none;">
      <div class="box-item">
        <img class="image" src="../assets/icons/tvkabel.svg" alt="" />
        <p class="text">TV Kabel</p>
      </div>
      </router-link>
    </div>
    <div class="sparator-22"></div>
    <div class="wrapper-content_item-row">
      <div class="box-item">
        <img class="image" src="../assets/icons/kereta.svg" alt="" />
        <p class="text">Kereta</p>
      </div>
      <div class="box-item">
        <img class="image" src="../assets/icons/pdam.svg" alt="" />
        <p class="text">PDAM</p>
      </div>
      <div class="box-item">
        <img class="image" src="../assets/icons/kupon.svg" alt="" />
        <p class="text">Kupon</p>
      </div>
      <div class="box-item">
        <img class="image" src="../assets/icons/bukareksa.svg" alt="" />
        <p class="text">BukaReksa</p>
      </div>
    </div>
  </div>
  <div class="sparator"></div>
  <div class="sparator-48"></div>
  <div class="header">
    <div class="header_item-row">
      <div class="box-item">
        <img class="image" src="../assets/icons/bl.svg" alt="" />
        <p class="text text--red">Home</p>
      </div>
      <div class="box-item">
        <img class="image" src="../assets/icons/discover.svg" style="width: 25px;" alt="" />
        <p class="text">Discover</p>
      </div>
      <div class="box-item">
        <img class="image" src="../assets/icons/bukamall.svg" style="width: 22px;" alt="" />
        <p class="text">BukaMall</p>
      </div>
      <div class="box-item">
        <img class="image" src="../assets/icons/trsansaksi.svg" style="width: 25px;" alt="" />
        <p class="text" style="margin-top: 7px;">Transaksi</p>
      </div>
      <div class="box-item">
        <img class="image" src="../assets/icons/akun.svg" alt="" />
        <p class="text">Akun</p>
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
  export default {
    name: 'HomeTvKabel'
  }
</script>
<style lang="scss" scoped>
.wrapper-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  background: #ffffff;

  &_item-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 328px;
    .title {
      font-weight: 600;
      font-size: 16px;
      color: #282E33;
      line-height: 26px;
    }
    .span {
      font-weight: 700;
      font-size: 10px;
      color: #EE4B60;
      letter-spacing: 0;
      line-height: 14px;
    }
    .box-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 63px;
      .image {
        width: 40px;
        height: 40px;
      }
      .text {
        font-size: 12px;
        font-weight: 400;
        color: #3C464F;
        letter-spacing: 0;
        text-align: center;
        margin-top: 7px;
      }
    }
  }
}

.wrapper-content-two {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  background: #ffffff;
  &_item-row {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 350px;
    .box-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 82px;
      .image {
        width: 48px;
        height: 48px;
      }
      .text {
        font-size: 12px;
        font-weight: 400;
        color: #3C464F;
        letter-spacing: 0;
        text-align: center;
        margin-top: 11px;
      }
    }
  }
}
.sparator {
  position: relative;
  width: 100%;
  height: 12px;
  background: #F3F4F6;
}
.sparator-16 {
  position: relative;
  width: 100%;
  height: 16px;
}
.sparator-22 {
  position: relative;
  width: 100%;
  height: 22px;
}
.sparator-48 {
  position: relative;
  width: 100%;
  height: 48px;
}

.header {
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 8px 0;
  background: #FFFFFF;
  border-top: 1px solid #EEEEEE;

  &_item-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 328px;
    .box-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 46px;
      .image {
        width: 18px;
      }
      .text {
        font-weight: 400;
        font-size: 10px;
        color: #6E7178;
        text-align: center;
        margin-top: 4px;
      }
      .text--red {
        color: #D71149;
      }
    }
  }
}
</style>

