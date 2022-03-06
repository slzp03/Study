<template>
  <div class="header_img">
    
    <img src="@\assets\image.jpg" alt="My Image">
    <div class="header_text">
      <p>WEB エンジニア ポートフォリオ</p>
      <p>{{msg}}</p>
    </div>
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
.header_img {
  display: flex;
  width: 100%;
  height: 300px;
  padding-left: 100px;
  margin-top: 100px;
  padding-bottom: 15px;
}

.header_text {
  padding-left: 50px;
  color:azure;
}
</style>