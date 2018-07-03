
<head><link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></head>
<template>
    <div><h3>用户列表</h3>
      <div><i class="fa fa-address-book"></i></div>
      <div style="display:inline">
        <div v-for="user of userList">
          <div style="display:inline; width: 100px"><span>{{user.Name}}</span></div>
          <div style="display:inline"><i class="fa fa fa-list" @click="edit(user.ID)"></i></div>
          <div style="display:inline"><i class="fa fa-trash-o fa-lg" @click="delUser(user.ID)"></i></div>
        </div>
      </div>
      <model v-if="show" v-bind:userInfoStr="userInfoStr" style="display:inline">
        <div>
          <span>用户名:</span>
          <input v-model="userInfo.Name" disabled>
        </div>
        <div>
          <span>电话:</span>
          <input v-model="userInfo.Phone">
        </div>
        <div>
          <span>地址:</span>
          <input v-model="userInfo.Address">
        </div>
        <div>
          <span>创建时间:</span>
          <input v-model="userInfo.CreateTime" disabled>
        </div>
        <div>
          <span>修改时间:</span>
          <input v-model="userInfo.UpdateTime" disabled>
        </div>
      </model>
      <div>
        <button v-if="show" @click="save">保存</button>
      </div>
    </div>
</template>
<script>
  import model from '../common-components/model'
    export default {
        name: "UserList",
        components:{model},
        data() {
        return {
          userList:[],
          show:false,
          userInfoStr:'',
          userInfo:{}
        }
      },
        created() {
          this.list()
        },
      methods:{
        list:function() {
          this.$http.get("/api/user/list")
            .then((data) => {
              this.userList = data.body.user;
              console.log('data', data.body)
            })
        },
        edit:function (id) {
            this.show = true;
          this.$http.get("/api/user/query/" + id)
            .then((data) => {
              this.userInfo = data.body.user;
              this.userInfoStr = JSON.stringify(data.body.user)
            });
          },
        save:function () {
          console.log(this.userInfo);
          this.$http.put("/api/user/update", this.userInfo)
            .then(() => {
              this.$router.go(0)
            })
        },
        delUser:function (id) {
          this.$http.delete("/api/user/delete/" + id)
            .then(() => {
              this.list();
            })
        }
      }
    }
</script>

<style scoped>
  div{
    padding-right: 10%;
    padding-top: 1%;

  }
</style>
