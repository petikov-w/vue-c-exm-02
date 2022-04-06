<template>
<div class="testimonials-section">
  <TestimonialsListItem class="west" v-for="testimonial in testimonials" :key="testimonial.id" :tm_data="testimonial">
  </TestimonialsListItem>
</div>
</template>

<script>
import TestimonialsListItem from '../components/TestimonialsListItem';
export default {
  name: "TestimonialsList",
  components: {
    TestimonialsListItem
  },
  data: function () {
    return {
      testimonials: [
        {
          id: 1,
          img_src: require('../assets/images/otz2.jpg'),
          img_alt: "otziv",
          otziv: "Покупала у ребят коврики для Хундай солярис в подарок молодому человеку. Все очень понравилось. " +
                 "Буду советовать только вас.",
          author: "Вера К."
        },
        // {
        //   id: 2,
        //   img_src: require('../assets/images/otlichie.jpg'),
        //   img_alt: "otlichie",
        //   title: "отличия",
        //   description: "Резиновые коврики загибаются и лезут на педали. EVA коврики такого не допустят! " +
        //       "Специальные липучки держат его в одном положении. При желании, для водителя устанавливается подпятник " +
        //       "из рельефного алюминия."
        // },
        // {
        //   id: 3,
        //   img_src: require('../assets/images/rascvetka.jpg'),
        //   img_alt: "rascvetka",
        //   title: "расцветка",
        //   description: "Автомобильные коврики EVA можно заказать и в индивидуальных размерах и в разных цветах, " +
        //       "которые комбинируется на выбор покупателя с такими же цветами окантовочной полипропиленовой " +
        //       "ременной ленты."
        // }
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