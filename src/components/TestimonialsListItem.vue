<template>
  <div class="testimonial">
    <img :src=" tm_data.img_src" :alt=" tm_data.img_alt">
    <div class="otziv">{{ tm_data.otziv }}</div>
    <div class="author">{{  tm_data.author }}</div>
  </div>
</template>

<script>
export default {
  name: "TestimonialsListItem",
  props: {
    tm_data: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonial {
  position: relative;
  background: #FFFFFF;
  border: 1px solid #f5f5f5;
  width: 536px;
  max-height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //overflow: hidden;
  border-radius: 9px;
  box-shadow: 0px 1px 20px 6px rgba(236, 198, 217, 0.5);
  //margin-bottom: 30px; // Потом убрать!
  padding: 0 46px;
  padding-top: 80px;
  img {
    @include wh_size(90px, 90px, "circle");
    position: absolute;
    top: -50px;
  }
  .otziv {
    @include font(18px, 300, 22px);
    margin: 20px 0 15px 0;
    text-align: center;
  }
  .author {
    @include font(13px, 300, 16px, #767676);
    padding: 0 40px;
    max-width: 290px;
    text-align: center;
  }
}
</style>