<template>
    <div class = "wrapper"> 
            <Sideinfo />        
        <div class = "content">
            <p>YOUR PROFILE</p>
        </div>
        <div class = "profile">
            <p>{{user.name}}</p>
            <p>{{user.email}}</p>
            <button type="button" @click="Logout"></button>
        </div>
    </div>
</template>

<script>
import Sideinfo from '../components/Sideinfo';
import axios from 'axios';

export default{
    components: {
        Sideinfo,
    },
    data(){
        return{
            active:true,
            name:this.$store.state.user.name,
            profile:this.$store.state.user.profile,
            user:"",
        };
    },
    mounted(){
        axios.get("/api/user").then(response => {
            this.user = response.data;
        });
    },
    methods:{
        edit(){
            if(!this.active){
                axios
                .put("https://radiant-depths-46964.herokuapp.com/api/user",{
                    email: this.$store.state.user.email,
                    profile: this.profile,   
                })
                .then((response) => {
                    this.$store.commit("changeUserData", this.profile);
                    console.log(response);
                });
            }
            this.active = !this.active;
        }
    },
    logout(){
        axios
            .post("api/Logout")
                .then(response=> {
                    console.log(response);
                    localStorage.removeItem("auth");
                    this.$router.push("/Login");
                })
                .catch(error => {
                    console.log(error);
                });
        }
};
</script>

<style scoped>
.content p{
    margin-left: 40%;
    padding-top: 5%;
    font-size: 30px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

</style>