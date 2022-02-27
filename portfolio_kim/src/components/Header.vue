<template>
  <div id="header-wrap">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return{
      msg:'2年目Javaエンジニア　キムミョンフンと申します。'
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