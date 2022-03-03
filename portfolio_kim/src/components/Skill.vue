<template>
<div class="sec_title">
  <p>SKILL</p>
</div>
  <div>
    <!-- <img  alt="Image Error"><span class = "skills_sec sec_motion" v-for="(data, idx) in langs" :key="idx">言語：{{data.item}} </span><br> -->
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

</style>
