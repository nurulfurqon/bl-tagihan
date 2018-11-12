<template>
<div v-if="title !== null && text !== null">
  <div v-if="popupActive" @click="popupActive = !popupActive; removeTersalin()" class="overlay"></div>
  <div class="popup" :class="positionHeaderPop()" :style="bottomVal()">
    <div @click="popupActive = !popupActive; removeTersalin()" class="popup_header" :style="bgColorVal()">
      <div class="popup_header_content">
        <img :src="require(`../assets/icons/${icon}.svg`)" class="icon" />
        <div class="sp-h--8"></div>
        <p class="title">{{ title }}</p>
      </div>
      <div class="popup_header_content">
         <img :src="require(`../assets/icons/${iconDown()}.svg`)" class="icon-two" />
      </div>
    </div>
    <div class="popup_content">
      <div class="card">
        <p class="text">{{ text }}</p>
        <div v-if="kode !== null && usedKode !== true" class="box-code">
          <div class="content-text">
            <p class="text-light">Kode:&nbsp;</p> <p class="text-semi text-semi--normal">{{ kode }}</p>
          </div>
          <div class="content-text">
            <p v-clipboard:copy="kode" @click="usedKode = true" class="text-semi text-semi--red">Salin</p>
          </div>
        </div>
        <div v-else class="box-code box-code--tersalin">
          <div class="content-text">
            <p class="text-light text-green">Kode:&nbsp;</p> <p class="text-semi text-semi--normal text-green">{{ kode }}</p>
          </div>
          <div class="content-text">
            <img src="../assets/icons/ic_circle-check.svg" style="margin-right: 5px" />
            <p class="text-semi text-semi--red text-green">Tersalin</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    kode: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    positionPopup: {
      type: String,
      default: 'fixed',
    }
  },
  data() {
    return {
      popupActive: false,
      usedKode: false,
    };
  },
  methods: {
    iconDown() {
      let icon;
      this.popupActive !== true ? icon = 'ic_visibility' : icon = 'ic_invisibility';
      return icon;
    },
    positionHeaderPop() {
      if (this.positionPopup == 'fixed') {
        return 'popup-fixed';
      } else {
        return 'popup-absolute';
      }
    },
    bottomVal() {
      let bottom;
      this.popupActive !== true ? bottom = 'bottom: -158px' : bottom = 'bottom: 0px';
      return bottom;
    },
    bgColorVal() {
      let bgColor;
      this.popupActive !== true ? bgColor = 'background: #F9FAFB' : bgColor = 'background: #fff';
      return bgColor;
    },
    removeTersalin() {
      if(this.popupActive === false) {
        setTimeout(function () {
          this.usedKode = false;
        }.bind(this), 600)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  z-index: 1111;
  width: 100%;
  height: 100%;
  opacity: 0.48;
  background: #25282F;
}
  .popup-fixed {
    position: fixed;
  }
  .popup-absolute {
    position: absolute;
  }
  .popup {
    width: inherit;
    transition: all .3s ease-in-out;
    flex-direction: column;
    z-index: 1112;
    &_header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 16px;
      box-shadow: 0 -2px 4px 0 rgba(37,40,47,0.10);
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      &_content {
        position: relative;
        display: flex;
        flex-direction: row;
        .title {
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
        }
        .icon {
          position: relative;
          width: 24px;
          height: 24px;
        }
        .icon-two {
          position: relative;
          width: 16px;
        }
      }
    }
    &_content {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 158px;
      padding: 13px 16px 24px;
      background: #F1F2F5;

      .card {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 120px;
        padding: 16px;
        border-radius: 6px;
        background: #FFFFFF;
        box-shadow: 0 1px 2px 0 rgba(51,51,51,0.16);
        .text {
          font-size: 14px;
          color: #52565F;
          letter-spacing: 0;
          line-height: 20px;
          text-align: left;
        }
        @media only screen and (max-width: 360px) {
          .text {
            font-size: 13px;
            line-height: 18px;
          }
        }
        @media only screen and (max-width: 320px) {
          .text {
            font-size: 12px;
            line-height: 16px;
          }
        }
        .box-code {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          border-radius: 6px;
          padding: 9px 13px;
          margin-top: 10px;
          background: #F9FAFB;

          &--tersalin {
            background: #E7F7F1;

            .text-green {
              color: #389C73 !important;
            }
          }
          .content-text {
            position: relative;
            display: flex;
            flex-direction: row;
            .text-light {
              font-size: 12px;
              color: #999999;
              letter-spacing: 0;
              line-height: 18px;
            }
            .text-semi {
              font-size: 12px;
              font-weight: 600;
              letter-spacing: 0;
              line-height: 18px;
              &--normal {
                color: #3F4248;
              }
              &--red {
                color: #EA5164;
                &:active {
                  opacity: 0.5;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
