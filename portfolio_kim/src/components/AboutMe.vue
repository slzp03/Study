<template>
  <div id="header-wrap">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    msg: String
  }
}
</script>
