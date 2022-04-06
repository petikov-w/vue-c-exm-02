<template>
  <div class="testimonial">
    <img :src=" tm_data.img_src" :alt=" tm_data.img_alt">
    <div class="otziv">{{ tm_data.otziv }}</div>
    <div class="separator"></div>
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
  min-width: 536px;
  min-height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //overflow: hidden;
  border-radius: 9px;
  box-shadow: 0px 1px 20px 6px rgba(236, 198, 217, 0.5);
  margin: 0 50px;

  img {
    position: absolute;
    top: -50px;
    width: 90px;
    height: 90px;
    border-radius: 100%;
    border: 4px solid palevioletred;
    box-shadow: 0px 1px 20px 6px rgba(236, 198, 217, 0.5);
    //background: linear-gradient(94.31deg, rgba(212, 20, 90, 0.25) 0.96%, rgba(46, 49, 146, 0.25) 104.83%);
  }

.separator {
  width: 130px;
  border-bottom: 2px solid palevioletred;
  margin-bottom: 15px;
}



  .otziv {
    @include font(18px, 300, 22px);
    margin-top: 50px;
    margin-bottom: 20px;
    width: 442px;
    height: 75px;
    //padding: 30px 0 15px 0;
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