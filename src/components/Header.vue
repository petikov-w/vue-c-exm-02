<template>

    <div class="header">
      <div class="t-area">
        <img width="20" height="20" src="../assets/images/i-telefon.png" alt="ico-telefon">
        <Telefon class="tels fnt" :tel="79094282463"></Telefon>
        <Telefon class="tels" :tel="79059202069"></Telefon>
      </div>
      <div class="m-area">
        <img width="15" height="25" src="../assets/images/i-mesto.png" alt="ico-area">
        <div class="mesto">{{ city }}</div>
      </div>
      <div class="s-area">
        <img width="30" height="30" src="../assets/images/instagram-icon-white.png" alt="ico-social">
        <div class="social-text" >{{ text }}</div>
      </div>
    </div>

</template>

<script>
import Telefon from '@/components/NumberTelefon';
export default {
  components: {
    Telefon
  },
  name: "Header",
  data: function () {
    return {
      city: "Ростов-на-Дону ",
      text: "посетите нашу страницу"
    }
  }
}
</script>

<style lang="scss" scoped>

 .tels {
  margin-left: 15px;
}

:deep(.telefon) {
  color: #FFFFFF;
}


:deep(fnt) {
  color: #FFFFFF;
}

.header {
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .t-area {
    display: flex;
    align-items: center;
  }
  .m-area {
    display: flex;
    align-items: center;
    //margin-left: 175px;
    .mesto {
      @include font (15px, 500, 20px, #FFFFFF);
      padding-left: 13px;
      text-decoration: none;
    }
  }
  .s-area {
    display: flex;
    align-items: center;
    //margin-left: 120px;
    .social-text {
      font-size: 14px;
      color: #FFFFFF;
      max-width: 97px;
    }
    img {
      margin-right: 10px;
      //margin-left: 120px;
    }
  }

}

/*Адаптивные стили*/
/*----------------*/
@media (min-width: 800px) and (max-width: 1200px) {
  .header {
    width: 80vw;
    margin: 0 auto;
  }
}

@media (min-width: 500px) and (max-width: 750px) {
  .header {
    width: 60vw;
    margin: 0 auto;
  }
  .m-area {
    margin-left: 5vw;
  }
}

@media (max-width: 500px) {
    .header {
      display: flex;
      flex-direction: column;
      height: 28vh;
      width: 100vw;
      margin: 0 auto;
    }
    .t-area {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 15px;
    }
  .m-area {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 15px 0;
  }
}

</style>
