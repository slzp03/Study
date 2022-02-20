<template>
  <div class="nav">
    <nav>
      <span>Portfolio</span> |
      <span>自己紹介</span> |
      <span>スキル</span> |
      <span>github</span> |
      <span>履歴</span>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return{
      msg:'Backendエンジニアキムミョンフンと申します。'
    }
    
  }
}
</script>
<style>
  .nav{
    font-size: 3.2rem;
    font-weight: 800;
    color: #eadbbe;
    transition: all .3s;
  }
  a{
    color: black;
  }
</style>