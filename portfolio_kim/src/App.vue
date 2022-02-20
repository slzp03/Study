<template>
  <div>
    <Nav></Nav>
  </div>
  <div>
    <Header></Header>
  </div>
  <div>
    <AboutMe></AboutMe>
  </div>
  <div>
    <Skill></Skill>
  </div>
  <div>
    <Repository></Repository>
  </div>
  <div>
    <Career></Career>
  </div>
  <div>
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
  created() {
        console.log(this.$router)
  },
}
</script>



<style>
div {
  display: block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:rgb(10, 6, 1);
  margin-top: 60px;
  
}

</style>

