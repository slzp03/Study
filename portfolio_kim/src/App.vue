<template>
  <div>
    <AboutMe msg="활발하고 끈기있는 성격이 장점인 2년차 
백엔드 개발자 김명훈입니다."/>
  </div>
  <Skill></Skill>
  <Repository></Repository>
  <Career></Career>
  <Footer></Footer>
  
</template>

<script>
import AboutMe from './components/AboutMe.vue'
import Skill from './components/Skill.vue'
import Repository from './components/Repository.vue'
import Career from './components/Career.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    AboutMe,
    Skill,
    Repository,
    Career,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
