<template>
  <nav class="navbar">
    <Nav/>
  </nav>
  <div class="header">
    <Header></Header>
  </div>
  <div class="aboutMe">
    <AboutMe></AboutMe>
  </div>
  <div class="skill">
    <Skill></Skill>
  </div>
  <div class="repository">
    <Repository></Repository>
  </div>
  <div class="career">
    <Career></Career>
  </div>
  <div class="final">
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
body {
  margin: 0%;
  width: 100%;
}
template {
  margin: 0;
  width:100%;
  font-family: 'Source Sans Pro', sans-serif;
}
a {
  font-family: 'Source Sans Pro', sans-serif;
  text-decoration: none;
  color: antiquewhite;
}
.navbar {
  display: flex;
  position: fixed;
  width:100%;
  justify-content: space-between;
  align-items: center;
  background-color: #263343;
  z-index: 1;
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

.header {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  display: flex;
  align-items: center;
  background-color:burlywood;
  width:100%;
  padding: 8px 12px;
  color: antiquewhite;
}

.aboutMe {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  display: gird;
  align-items: center;
  background-color:antiquewhite;
  width:100%;
  padding: 8px 12px;
  color: antiquewhite;
}

.skill {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  display: gird;
  align-items: center;
  background-color:rgb(226, 84, 19);
  width:100%;
  padding: 8px 12px;
  color: antiquewhite;
  z-index: 0;
}

.repository {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  display: gird;
  align-items: center;
  text-align: center;
  background-color:rgb(216, 150, 63);
  width:100%;
  padding: 8px 12px;
  color: antiquewhite;
}

.career {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  display: gird;
  align-items: center;
  text-align: center;
  background-color:rgb(129, 216, 30);
  width:100%;
  padding: 8px 12px;
  color: antiquewhite;
}

.final {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  display: gird;
  align-items: center;
  background-color:rgb(138, 23, 173);
  width:100%;
  padding: 8px 12px;
  color: antiquewhite;
}

</style>

