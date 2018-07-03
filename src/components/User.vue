<template>
  <div class="user">
    <button><router-link to="/list">用户列表</router-link></button>
    <button><router-link to="/add">新增用户</router-link></button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      msg: '这里是user页面'
    }
  }
}
</script>

<style scoped>
</style>
