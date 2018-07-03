<template>
  <div id="app">
    <h1>{{title}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/Home'
export default {
  name: 'App',
  data () {
    return {
      title:'用户管理'
    }
  },
  components:{
    'Home': Home
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
