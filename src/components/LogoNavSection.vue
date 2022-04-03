<template>
  <div class="logo-nav">
    <div class="logo">
      <img src="../assets/images/logo-header.svg" alt="logo">
      <span>evarugs</span>
    </div>
    <div class="nav-menu">
      <ul>
        <li><a href="#">отзывы</a></li>
        <li><a href="#">что это?</a></li>
        <li><a href="#">контакты</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoNavSection"
}
</script>

<style lang="scss" scoped>
.logo-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
}

.logo {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.logo span {
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  /*color: #000000;*/
  color: $main_color;
  padding-left: 11px;
  text-transform: uppercase;
  font-style: italic;
}

.nav-menu {
  width: 35%;
}
.nav-menu ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
}
.nav-menu ul a {
  font-weight: 300;
  font-size: 20px;
  line-height: 21px;
  color: #737373;
  text-transform: lowercase;
  text-decoration: none;
}
.nav-menu ul a:hover {
  padding-bottom: 5px;
  border-bottom: 1.5px solid #4d4d4d;
}
</style>