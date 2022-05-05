<template>
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
</template>

<script>
import TestimonialsListItem from '../components/TestimonialsListItem';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { listTestimonials } from "@/_testimonials_content";

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

  data: function () {
    return {
      testimonials: listTestimonials
    }
  }
}
</script>

<style lang="scss" scoped>
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