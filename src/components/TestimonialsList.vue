<template>
<div class="testimonials-section">
<!--  <carousel :items="3" :nav="false" :margin="20" :autoplay="true" :dots="false">-->
    <TestimonialsListItem class="west" v-for="testimonial in testimonials" :key="testimonial.id" :tm_data="testimonial">
    </TestimonialsListItem>
<!--  </carousel>-->

</div>
</template>

<script>
import TestimonialsListItem from '../components/TestimonialsListItem';
import carousel from 'vue-owl-carousel'

export default {
  name: "TestimonialsList",
  components: {
    TestimonialsListItem,
    carousel
  },
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
    .testimonials-section {
        height: 360px;
        background: linear-gradient(94.31deg, rgba(212, 20, 90, 0.25) 0.96%, rgba(46, 49, 146, 0.25) 104.83%);
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>