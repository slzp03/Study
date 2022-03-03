<template>
  <nav class="navbar">
    <Nav/>
  </nav>
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
  },

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');
template {
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
a {
  font-family: 'Source Sans Pro', sans-serif;
  text-decoration: none;
  color: antiquewhite;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #263343;
  padding: 8px 12px;
}
@media screen and (max-width: 768px) {
  .navbar{
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;
  }
  .navbar_menu{
    flex-direction: column;
    align-items: center;
    width: 100%;
    
  }
  .navbar_menu li {
    width: 100%;
    text-align: center;
  }
  .navbar_icon {
    justify-content: center;
    width: 100%;
  }
  .navbar_toggleBtn {
    display: block;
  }

  .navbar_icon.active,
  .navbar_menu.active {
    display: flex;
  }
}
</style>

