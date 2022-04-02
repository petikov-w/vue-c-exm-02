<template>

    <div class="hero">
      <img src="../assets/kovriks-hero.png" alt="background-hero">
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
      background-image: url(../assets/background-hero.png);
      background-repeat: no-repeat;
      background-position-x: 78%;
      height: 80vh;
      position: relative;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .hero img {
      position: absolute;
      top: -75px;
      right: 240px;
    }

    .info-box {
      width: 1120px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center!important;

    }

    .info-box button {
      width: 20%;
    }
</style>