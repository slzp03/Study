<template>
  <div class="sec_title">
    <i class="fa-solid fa-laptop-code fa-2x"></i>
    <p>SKILL</p>
  </div>
  <div class="skill_item">
    <img src="@/assets/front.png" alt="Image Error">
    <img src="@/assets/back.png" alt="Image Error">
    <img src="@/assets/git.png" alt="Image Error">
    <div class="skill_item2">
      <img src="@/assets/deploy.png" alt="Image Error">
      <img src="@/assets/commu.png" alt="Image Error">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
}
</script>

<style>
  .sec_title {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
  }
  .skill_item {
    display : flex;
    gap: 20px;
    width: 100%;
    padding: 8px 12px;
    background-image: none;
  }
  .skill_item img {
    border-radius: 10px;
    filter: drop-shadow(3px 3px 3px gray) ;
  }
    .skill_item2 {
    display : block;
    gap: 30px;
  }
</style>
