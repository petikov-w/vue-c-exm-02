<template>
<!--  <div class="swiper-container">-->
    <swiper
        class="swiper"
        :modules="modules"
        :initial-slide="0"
        :slides-per-view="1"
        :space-between="50"
        :autoplay="{delay: 3000, }"
        :loop="true"

        @swiper="onSwiper"
        @slideChange="onSlideChange">

      <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
        <div class="sds">
          <div class="testimonial">
            <img :src="testimonial.img_src">
            <div class="otziv">{{ testimonial.otziv}}</div>
            <div class="separator"></div>
            <div class="author">{{ testimonial.author}}</div>
          </div>
        </div>
      </swiper-slide>

    </swiper>
<!--  </div>-->


<!--<div class="testimonials-section">-->
<!--    <TestimonialsListItem class="west" v-for="testimonial in testimonials" :key="testimonial.id" :tm_data="testimonial">-->
<!--    </TestimonialsListItem>-->
<!--</div>-->

</template>

<script>
import TestimonialsListItem from '../components/TestimonialsListItem';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: "TestimonialsList",
  components: {
    TestimonialsListItem,
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay],
    };
  },
  // mounted:function(){
  //   var mySwiper = new Swiper('.swiper-container', {
  //     autoplay:true,
  //     loop:true
  //   })
  // },
  // options: {
  //   autoplay: { delay: 3000 },
  //   keyboard: { enabled: true },
  //   loop: {
  //     loopedSlides: 1
  //   }
  //   },

  data: function () {
    return {
      testimonials: [
        {
          id: 1,
          img_src: require('../assets/images/otz1.png'),
          img_alt: "otziv",
          otziv: "Коврики супер!!! Качество на высшем уровне!!! Удачи и побольше заказов вам!!! " +
                 "Большое спасибо!",
          author: "Константин В."
        },
        {
          id: 2,
          img_src: require('../assets/images/otz2.jpg'),
          img_alt: "otziv",
          otziv: "Покупала у ребят коврики для Хундай солярис в подарок молодому человеку. Все очень понравилось. " +
                 "Буду советовать только вас.",
          author: "Вера К."
        },
        {
          id: 3,
          img_src: require('../assets/images/otz3.jpg'),
          img_alt: "otziv",
          otziv: "Спасибо, все приехало, поставил. Результатом доволен, в машине супер! Заказывал на Ниссан.",
          author: "Николай П."
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    //.testimonials-section {
    //    height: 360px;
    //    background: linear-gradient(94.31deg, rgba(212, 20, 90, 0.25) 0.96%, rgba(46, 49, 146, 0.25) 104.83%);
    //    display: flex;
    //    align-items: center;
    //    justify-content: center;
    //}

    //  .swiper {
    //  @include swiper-wrapper();
    //  background: linear-gradient(94.31deg, rgba(212, 20, 90, 0.25) 0.96%, rgba(46, 49, 146, 0.25) 104.83%);
    //
    //  ::v-deep(.swiper-slide) {
    //    @include swiper-slide();
    //  }
    //}
    .swiper {
      background: linear-gradient(94.31deg, rgba(212, 20, 90, 0.25) 0.96%, rgba(46, 49, 146, 0.25) 104.83%);
    }

    .testimonial {
      position: relative;
      background: #FFFFFF;
      border: 1px solid #f5f5f5;
      min-width: 600px;
      min-height: 190px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 9px;
      box-shadow: 0px 1px 20px 6px rgba(236, 198, 217, 0.5);
      margin: 80px 50px;

      img {
        position: absolute;
        top: -57px;
        width: 90px;
        height: 90px;
        border-radius: 100%;
        border: 3px solid transparent;
        background: linear-gradient(90.14deg, #D4145A 3.35%, #3D5BF5 91.43%);
        box-shadow: 0px 1px 20px 6px rgba(236, 198, 217, 0.5);
      }

      .separator {
        width: 130px;
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(90.14deg, #D4145A 3.35%, #3D5BF5 91.43%);;
        border-image-slice: 1;
        margin-bottom: 15px;
        background: linear-gradient(94.31deg, rgba(212, 20, 90, 0.25) 0.96%, rgba(46, 49, 146, 0.25) 104.83%);
      }


      .otziv {
        @include font(18px, 300, 22px);
        margin-top: 50px;
        margin-bottom: 15px;
        width: 442px;
        height: 75px;
        //padding: 30px 0 15px 0;
        text-align: center;
      }

      .author {
        @include font(13px, 300, 16px, #767676);
        padding: 0px 40px;
        margin-bottom: 20px;
        max-width: 290px;
        text-align: center;
      }

    }

    .swiper-slide {
      //display: flex;
      //justify-content: center;
    }

    .sds {
      display: flex;
      justify-content: center;
    }

    @media (max-width: 500px) {
      .testimonial {
        min-width: 260px;
        .otziv {
          @include font(12px, 300, 16px);
          width: 222px;
        }
      }
    }


</style>