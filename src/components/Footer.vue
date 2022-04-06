<template>
    <div class="footer">
      <img class="blik-2" src="../assets/images/blik-eva-m.png" alt="blik">
      <img class="blik-3" src="../assets/images/blik-eva-s.png" alt="blik">
      <div class="wrapper">
        <div class="footer-box">
          <div class="box">
              <h4>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h4>
              <img class="social" src="../assets/images/instagram-icon.png" alt="instagram">
          </div>
          <div class="box">
              <h4>КОНТАКТНЫЕ ТЕЛЕФОНЫ</h4>
              <Telefon class="tels" :tel="79094282463"></Telefon>
              <Telefon class="tels" :tel="79059202069"></Telefon>
          </div>
          <div class="box">
              <h4>О НАС</h4>
              <p>Индивидуальное изготовление EVA ковриков для вашего автомобиля<br><br>
                Ростов-на-Дону</p>
          </div>
        </div>
    </div>
    </div>
</template>

<script>
import Telefon from '@/components/NumberTelefon';
export default {
  components: {
    Telefon
  },
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  margin-bottom: 100px;
}

.blik-2 {
  position: absolute;
  top: 10px;
  right: -20px;
}
.blik-3 {
  position: absolute;
  top: 82px;
  left: -70px;
}

.footer-box {
  display: flex;
  justify-content: space-around;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 130px;
  h4 {
    font-size: 14px;
  }
  p {
    max-width: 220px;
    margin: 0!important;
    @include font(14px, 300, 16px);
  }
}

.social {
  width: 33px;
  height: 33px;
}

:deep(.telefon) {
  color: #000000;
  font-size: 14px;
}
</style>