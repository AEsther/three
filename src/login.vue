<template>
  <div id="app">
     用户名:<input type="text" v-model="username"/>
     密码：<input type="text" v-model="password"/>
     <button v-on:click="login">登录</button>
     <router-view></router-view>
  </div>
</template>

<script>
    export default{
      data(){
        return{
          username:'',
          password:'',
          info:''
        }
      },
      events:{//接受信息
        "aaa":function(msg){
          alert(msg);
          alert(this.pm);
        }
      },
      props:[//接受信息
        "pm"
      ],
        methods:{
        login:function(){
        console.log(this);
        this.$emit("cev","content");//子组件向父组件发送信息
        this.$dispatch("childev","child message");
        this.$http.get("static/user.json")
        .then(function(res){
            var user=res.body.username;
            var password=res.body.password;
            if(this.username==user && this.password==password){
              this.$router.go("/home");
            }
        })
        }
      }
    }
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
