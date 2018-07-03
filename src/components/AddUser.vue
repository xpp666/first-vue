<template>
  <div>
    <p>
    <span>姓名:</span>
      <input v-model="userInfo.Name">
    </p>
    <p>
    <span>电话:</span>
      <input v-model="userInfo.Phone">
    </p>
    <p>
    <span>地址:</span>
      <input v-model="userInfo.Address">
    </p>
    <div>
      <button @click="save">创建用户</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AddUser",
      data() {
          return{
            userInfo:{}
          }
      },
      methods: {
        save:function () {
          this.$http.post("/api/user/register",this.userInfo)
            .then(()=>{
              this.$router.push({path:'/list'})
            })
        }
      }
    }
</script>

<style scoped>

</style>
