<template>
    <div>
        <Header/>
        <div class = "wrapper">
            <div class = "card">
                <p>ログイン</p>
                <div class = "form">
                    <input placeholder="メールアドレス" type = "email" v-model="email"/>
                    <span v-if="errors.email">
                        {{ errors.email[0] }}
                    </span>
                    <input placeholder="パスワード" type="password" v-model="password"/>
                    <span v-if="errors.email">
                        {{ errors.email[0] }}
                    </span>
                    <button @click="auth">ログイン</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header';
export default {
  components: {
    Header
  },
  data(){
      return{
          email:"",
          password:"",
          errors:[]
      };
  },
  methods:{
      auth(){
          this.$store.dispatch("Login",{
              email:this.email,
              password:this.password
          });
      }
  }
}
</script>


<style scoped>
.wrapper{
    background: url("https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80");
    background-size: cover;
    margin-top: -7%;
}
.card{
    text-align: center;
    margin: 100px auto;
    width: 450px;
    padding: 10%;
}
.card p{
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    color: white;
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
