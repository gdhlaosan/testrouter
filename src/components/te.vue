<template>
  <div class="te">
    这是te.vue 相当于body 和t.vue并列 这下面包含tes.vue和test.vue
    <!-- <router-view></router-view> -->
    <router-view name="tes"></router-view>
    <router-view name="test"></router-view>
  </div>
</template>

<script>
export default {
  name: 'te',
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