<template>
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
