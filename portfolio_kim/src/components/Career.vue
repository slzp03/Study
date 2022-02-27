<template>
  <div>
    <p>Career：{{ career }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Career',
    data() {
      return{
        career:'2020年 12月 ～ 株式会社2PSでSI勤務',
      }
      
    }
  }
</script>

<style>
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>