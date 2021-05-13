<template>
    <div class = "wrapper"> 
            <Sideinfo />        
        <div class = "content">
            <p>YOUR PROFILE</p>
        </div>
        <div class = "profile">
            <p>{{name}}</p>
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
        };
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