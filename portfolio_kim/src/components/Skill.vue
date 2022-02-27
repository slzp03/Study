<template>
<div class="sec_title">
  <p>SKILL</p>
</div>
  <div>
    <span class = "skills_sec sec_motion" v-for="(data, idx) in langs" :key="idx">言語：{{data.item}} </span><br>
    <span class = "skills_sec sec_motion" v-for="(data, idx) in frames" :key="idx">フレームワーク：{{ data.item }} </span><br>
    <span class = "skills_sec sec_motion" v-for="(data, idx) in dbs" :key="idx">データベース：{{ data.item }} </span><br>
    <span class = "skills_sec sec_motion" v-for="(data, idx) in deploys" :key="idx">デプロイメント：{{ data.item }} </span><br>
    <span class = "skills_sec sec_motion" v-for="(data, idx) in versions" :key="idx">バージョン管理：{{ data.item }} </span><br>
    <span class = "skills_sec sec_motion" v-for="(data, idx) in comus" :key="idx">コミュニケーション：{{ data.item }} </span><br>
    <span class = "skills_sec sec_motion" v-for="(data, idx) in qualis" :key="idx">資格：{{ data.item }} </span><br>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return{
      langs:[{item:'HTML'},{item:'CSS'},{item:'JavaScript'},{item:'Java'}],
      frames:[{item:'Springboot'},{item:'Vue.js'}],
      dbs:[{item:'MySql'},{item:'MSSql'}],
      deploys:[{item:'Docker'}],
      versions:[{item:'HTML'},{item:'CSS'},{item:'JavaScript'},{item:'Java'}],
      comus:[{item:'slack'},{item:'mattermost'},{item:'Jira'}],
      qualis:[{item:'情報処理技術者'},{item:'JLPT N2'}],
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
.skills_sec {
    width: calc(100% / 2 - 100px);
    margin-right: 70px;
    height: 100px;
    float: left;
    padding: 10px;
    transform: translateY(50px);
    transition: all .5s;
    opacity: 0;
}
.sec_motion {
    transform: translateY(0px)!important;
    opacity: 1!important;
}
</style>
