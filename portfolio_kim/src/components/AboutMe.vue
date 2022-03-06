<template>
  <div class="sec_title">
    <i class="fa-solid fa-face-meh-blank fa-2x"></i>
    <p>ABOUT ME</p>
  </div>
  <div class="sec_text">
    <i class="fa-solid fa-person fa-2x"></i><p>名前：{{ name }}</p>
    <i class="fa-solid fa-calendar fa-2x"></i><p>誕生日：{{ birth }}</p>
    <i class="fa-solid fa-address-book fa-2x"></i><p>住所：{{ address }}</p>
    <i class="fa-solid fa-mobile fa-2x"></i><p>携帯電話：{{ tel }}</p>
    <i class="fa-regular fa-envelope fa-2x"></i><p>メール：{{ mail }}</p>
    <i class="fa-solid fa-clock-rotate-left fa-2x"></i><p>履歴：{{ History }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return{
      name:'KIM MYUNGHOON',
      birth:'1995.11.23',
      address:'東京都豊島区南大塚',
      tel:'070-1243-4147',
      mail:'slzp03@naver.com',
      History:'忠北大学校',
    }
    
  }
}
</script>
<style>
  .sec_title {
    display: grid;
    text-align: center;
    color: rgb(5, 2, 15);
  }
  .sec_title i {
      padding-top: 10px;
      color: black;
  }
  .sec_text {
    display: grid;
    text-align: center;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-columns: 50px 300px 50px 300px;
    column-gap:20px ;
    row-gap: 50px;
    justify-content: center;
  }
    .sec_text i{
      padding-top: 10px;
      color: black;
      align-content: center;
      align-items: center;
  }

  .sec_text p {
    background-color:brown;
    border-radius: 4px;
  }
</style>
