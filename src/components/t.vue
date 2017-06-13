<template>
  <div class="t">
    这是t.vue 相当于header 和te.vue并列
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 't',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
