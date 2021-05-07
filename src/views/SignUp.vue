<template>
    <div>
        <Header/>
        <div class="wrapper">
        <div class="card">
        <p>新規登録</p>
        <div class = "form">
            <input placeholder="ユーザーネーム" type = "text" v-model="name" />
            <input placeholder="メールアドレス" type = "email" v-model="email" />
            <input placeholder="パスワード" type = "password" v-model="password" />
            <button @click="auth">新規登録</button>
        </div>
        </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header';

export default {
  data(){
    return{
      name:"",
      email:"",
      password:""
    };    
  //return axios.create({
    //baseURL:'http://localhost:8080/'
  //})
  },
  components: {
    Header
  },
  methods:{
    auth(){
      axios.post("https://afternoon-falls-65270.herokuapp.com/api/register",{
        name:this.name,
        email:this.email,
        password:this.password
      })
      .then(response =>{
        console.log(response);
        this.$router.replace("/")
      })
      .catch(error => {
        alert(error);
      });
    }
  }
};
</script>

<style scoped>
.wrapper{
    background: url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80");
    background-size: 100%;
    margin-top: -7%;
}
.card{
    text-align: center;
    margin: 100px auto;
    width: 450px;
    padding: 10%;
}
.card p{
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
}
.form{
    text-align: center;
}
input {
  margin-top: 15px;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
  color: black;
}
button{
    text-align: center;
    margin-top: 15px;
    padding: 10px;
    border-radius: 30px;
    background-color: royalblue;
    color: beige;
    cursor: pointer;
    width: 100px;
}
</style>
