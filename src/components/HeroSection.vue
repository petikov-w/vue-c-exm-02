<template>

    <div class="hero">
      <img class="kovrik" src="../assets/images/kovriks-hero.png" alt="background-hero">
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
        @media (min-width: 768px) and (max-width: 1200px) {
          width: 368px;
          height: 473px;
          left: 380px;
          top: -100px;
        }
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
      @media (min-width: 768px) and (max-width: 1200px) {
        margin-left: 66px;
        justify-content: flex-start;
        padding-top: 10px;
      }
      .title {
        @include font (50px, 900, 59px);
        max-width: 670px;
        @media (min-width: 768px) and (max-width: 1200px) {
          @include font (40px, 900, 40px);
          max-width: 415px;
        }
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

    /*Адаптивные стили*/
    /*----------------*/
    @media (min-width: 800px) and (max-width: 1200px) {

    }

    @media (min-width: 500px) and (max-width: 750px) {

    }

    @media (max-width: 500px) {
        .hero {
          background-position-x: 40%;
          background-size: 140%;
          max-width: 100vw;
          height: 385px;
          margin-top: 30px;
          margin-left: 0;
        }
        .hero .kovrik {
          display: none;
        }
        .hero .info-box {
          padding-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 300px;
        }

        .hero .info-box button {
          @include font (10px, 700, 23px, #ffffff);
          padding: 7px 20px;
        }
        .hero .info-box .title {
            @include font (25px, 900, 25px);
            max-width: 194px;
            text-align: center;
        }
        .blik-1, .blik-2, .blik-3, .blik-4, .blik-5 {
             display: none;
        }

    }



</style>