<template>

    <div class="hero">
      <img src="../assets/kovriks-hero.png" alt="background-hero">
      <img class="blik-1" src="../assets/blik.png" alt="blik">
      <img class="blik-2" src="../assets/blik.png" alt="blik">
      <img class="blik-3" src="../assets/blik.png" alt="blik">
      <img class="blik-4" src="../assets/blik.png" alt="blik">
      <img class="blik-5" src="../assets/blik.png" alt="blik">
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

<style scoped>
    .hero {
      width: 1220px;
      margin: 0 auto;
      background-image: url(../assets/background-hero.png);
      background-repeat: no-repeat;
      background-position-x: 100%;
      height: 522px;
      position: relative;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .hero img {
      position: absolute;
      top: -75px;
      right: 70px;
    }
    .hero .blik-1 {
      position: absolute;
      top: 90px;
      left: 330px;
      height: 45px;
      width: 45px;
    }

    .hero .blik-2 {
      position: absolute;
      top: 76px;
      left: 312px;
      height: 23px;
      width: 23px;
    }

    .hero .blik-3 {
      position: absolute;
      top: 485px;
      left: 0;
      height: 74px;
      width: 74px;
    }

    .hero .blik-4 {
      position: absolute;
      top: 445px;
      left: 45px;
      height: 43px;
      width: 43px;
    }

    .hero .blik-5 {
      position: absolute;
      top: 490px;
      left: 75px;
      height: 13px;
      width: 13px;
    }

    .info-box {
      width: 1200px;
      margin: 0 auto;
      padding-top: 150px;
    }
    .info-box .title {
      font-weight: 900;
      font-size: 50px;
      line-height: 59px;
      max-width: 670px;
    }

    .info-box .subtitle {
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      max-width: 670px;
      margin: 20px 0;
    }

    .info-box button {
      padding: 15px 30px;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      border-radius: 7px;
      text-transform: uppercase;
      outline: none;
      border: 0;
      background: linear-gradient(95.2deg, #B90160 2.23%, #2E3192 99.51%);
      color: #FFFFFF;
      letter-spacing: 1px;
      /*width: 20%;*/
    }
</style>