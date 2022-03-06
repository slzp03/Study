<template>
  <div class="carrer_title">
    <i class="fa-solid fa-timeline  fa-2x"></i>
    <p>Carrer</p>
  </div>
  <div class="carrer_text">
    <img src="@/assets/2ps.png" alt="Image Error">
    <div class="text">
      <p>{{ career }}</p>
      <p>{{text}}</p>
      <p>{{history1}}</p>
    <p>{{history2}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Career',
    data() {
      return{
        career:'2020年 12月 ～ 株式会社2PS',
        text:'新入社員で入社して、SIとして勤務しました。',
        history1:'21/04 ~ 21/08 : Mizuho不動産の社員用WEBアプリケーションプロジェクト',
        history2:'21/09 ~ 22/04 : Yamato運輸のデジタルキー対応WEBアプリケーションプロジェクト',
      }
      
    }
  }
</script>

<style>
.carrer_title{
  display: flex;
  justify-content: center;
  gap: 20px;
}
.carrer_title i{
  margin-top: 10px;
}
.carrer_text{
  display: flex;
  justify-content: center;
  gap: 20px;
}
.carrer_text img{
  border-radius: 10px;
}

.text {
  display: block;
  text-align: left;
}
</style>