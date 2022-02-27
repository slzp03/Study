<template>
  <div class="sec_title">
    <p>ABOUT ME</p>
  </div>
  <div>
    <p>名前：{{ name }}</p>
    <p>誕生日：{{ birth }}</p>
    <p>住所：{{ address }}</p>
    <p>携帯電話：{{ tel }}</p>
    <p>メール：{{ mail }}</p>
    <p>履歴：{{ History }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return{
      name:'KIM MYUNGHOON',
      birth:'1995.11.23',
      address:'東京都練馬区光が丘',
      tel:'070-1243-4147',
      mail:'slzp03@naver.com',
      History:'忠北大学校',
    }
    
  }
}
</script>
<style>
.sec_title {
    font-size: 50px;
    font-weight: 600;
    width: 80%;
    margin: 0 auto 50px;
    text-transform: uppercase;
    font-family: 'Bungee',cursive;
    transform: translateY(50px);
    opacity: 0;
    transition: all .8s;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>
