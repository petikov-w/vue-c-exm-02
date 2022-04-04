<template>

    <div class="hero">
      <img src="../assets/images/kovriks-hero.png" alt="background-hero">
      <img class="blik-1" src="../assets/images/blik.png" alt="blik">
      <img class="blik-2" src="../assets/images/blik.png" alt="blik">
      <img class="blik-3" src="../assets/images/blik.png" alt="blik">
      <img class="blik-4" src="../assets/images/blik.png" alt="blik">
      <img class="blik-5" src="../assets/images/blik.png" alt="blik">
      <div class="info-box">
          <div class="title">Инновационные коврики для автомобиля</div>
          <div class="subtitle">в вашем городе</div>
          <button>заказать</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection"
}
</script>

<style lang="scss" scoped>

    .hero {
      @include wrapper(1220px);
      background-image: url(../assets/images/background-hero.png);
      background-repeat: no-repeat;
      background-position-x: 100%;
      height: 522px;
      position: relative;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      img {
        position: absolute;
        top: -75px;
        right: 70px;
      }
      .blik-1 {
        @include blik(45px, 90px, 330px);
      }
      .blik-2 {
        @include blik(23px, 76px, 312px);
      }
      .blik-3 {
        @include blik(74px, 485px, 0);
      }
      .blik-4 {
        @include blik(43px, 445px, 45px);
      }
      .blik-5 {
        @include blik(13px, 490px, 75px);
      }
    }

    .info-box {
      @include wrapper(1200px);
      padding-top: 150px;
      .title {
        @include font (50px, 900, 59px);
        max-width: 670px;
      }
      .subtitle {
        @include font (24px, 300, 28px);
        max-width: 670px;
        margin: 20px 0;
      }
      button {
        @include font (20px, 700, 23px, #ffffff);
        letter-spacing: 1px;
        padding: 15px 30px;
        border-radius: 7px;
        text-transform: uppercase;
        outline: none;
        border: 0;
        background: linear-gradient(95.2deg, #B90160 2.23%, #2E3192 99.51%);
      }
    }

</style>