<template>
  <div class="nav">
    <nav>
      <ul class="menu">
        <li class="nav-item"><a href="">Portfolio</a></li>
        <li class="nav-item"><a href="">自己紹介</a></li>
        <li class="nav-item"><a href="">スキル</a></li>
        <li class="nav-item"><a href="">github</a></li>
        <li class="nav-item"><a href="">履歴</a></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>
<style>
.nav {
    width: 100%;
    height: 80px;
    line-height: 80px;
    top: 50px;
    z-index: 99;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.menu {
    height: 100%;
    float: right;
    margin-right: 200px;
    font-size: 0;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}
.menu > li > a {
    display: block;
    width: 100%;
    height: 100%;
}
</style>