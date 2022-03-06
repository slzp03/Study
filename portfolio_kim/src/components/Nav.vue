<template>
  <div class="navbar_logo">
    <i class="fa-solid fa-code"></i>
    <a href="#">KMH Portfolio</a>
  </div>
  <ul class="navbar_menu">
    <li class="navbar-item"><a href="#">Portfolio</a></li>
    <li class="navbar-item"><a href="#">自己紹介</a></li>
    <li class="navbar-item"><a href="#">スキル</a></li>
    <li class="navbar-item"><a href="#">github</a></li>
    <li class="navbar-item"><a href="#">履歴</a></li>
  </ul>
  <div class="navbar_icon">
    <li><i class="fa-brands fa-facebook fa-2x"></i></li>
    <li><i class="fa-brands fa-github fa-2x"></i></li>
  </div>
  <a href="#" class="navbar_toggleBtn"><i class="fa-solid fa-bars"></i></a>
</template>

<script>
export default {
  name: 'Nav',
}
</script>
<style>

.navbar_logo {
  font-size: 24px;
  color: antiquewhite;
  padding: 8px 12px;
}
.navbar_logo i {
  color: aquamarine;
}
.navbar_menu {
  display: flex;
  list-style: none;
  font-size: 20px;
  padding-left: 0;
}
.navbar_menu li {
  padding: 8px 12px;
}
.navbar_menu li:hover {
  background-color: darkgoldenrod;
  border-radius: 4px;
}
.navbar_icon {
  list-style: none;
  color: beige;
  display: flex;
  padding-right: 100px;
}
.navbar_icon li {
  padding: 8px 12px;
}
.navbar_toggleBtn {
  display: none;
  position: absolute;
  right: 32px;
  font-size: 24px;
  color: beige;
}
</style>