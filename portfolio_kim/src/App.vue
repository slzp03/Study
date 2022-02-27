<template>
  <div class="section">
    <Nav></Nav>
  </div>
  <div class="section">
    <Header></Header>
  </div>
  <div class="section">
    <AboutMe></AboutMe>
  </div>
  <div class="section">
    <Skill></Skill>
  </div>
  <div class="section">
    <Repository></Repository>
  </div>
  <div class="section">
    <Career></Career>
  </div>
  <div class="section">
    <Footer></Footer>
  </div>
</template>


<script>
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'
import AboutMe from './components/AboutMe.vue'
import Skill from './components/Skill.vue'
import Repository from './components/Repository.vue'
import Career from './components/Career.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
  components: {
    Nav,
    Header,
    AboutMe,
    Skill,
    Repository,
    Career,
    Footer
  },
  head: {
    meta:[
      {name: 'viewport', content: 'width=device-width,initial-scale=1.0,user-scalable=no'},
      { property: 'og:type', content: 'website' }
    ]
  }
  ,
  created() {
        console.log(this.$router)
  },
}
</script>



<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Noto Sans KR',sans-serif;
    font-size: 15px;
    user-select: none;


    /* url(img/bot_bg.png)  */

}
.wrap {
    width: 100%;
    
}
.section {
  min-width: 1200px;
    overflow: hidden;
    position: relative;
    color: #ffffff;
    background: #1a73a0 ;
    padding-bottom: 400px;
    width: 100%;
    margin-bottom: 50px;
    position: relative;
}



</style>

