<template>
 <div class="card">
   <img src="../assets/images/material.jpg" alt="{{ title }}">
   <img src="{{ img_src }}" alt="{{ title }}">
<!--   <div class="title">материал</div>-->
<!--   <div class="discription">Коврики EVA всесезонные и отличаются уникальной поверхностью материала с-->
<!--     ячейками ромбовидной формы. Из-за чего вода не проливается при изъятии ковра и не плещется при езде.-->
<!--     Коврики воду не пропускают.</div>-->
<!-- </div>-->
   <div class="title">{{ title }}</div>
   <div class="description">{{description}}</div>
 </div>
</template>

<script>
export default {
  name: "Card",
  props: {img_src: String, img_alt:string, title: String, description: String}
}
</script>

<style lang="scss" scoped>
    .card {
      border: 1px solid #f5f5f5;
      width: 344px;
      height: 414px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border-radius: 9px;
      box-shadow: 0px 1px 20px 6px rgba(236, 198, 217, 0.5);
      margin-bottom: 30px; // Потом убрать!
      img {
        height: 242px;
      }
      .title {
        @include font(36px, 700, 42px);
        margin: 20px 0 15px 22px;
        text-transform: uppercase;
      }
      .description {
        @include font(14px, 300, 17px, #767676);
        margin-left: 22px;
        margin: 0 0 30px 22px;
        max-width: 290px;
      }
    }
</style>