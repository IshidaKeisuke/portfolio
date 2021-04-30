<template>
    <div class = "wrapper">
        <Header/>
        <h2>{{text}}についての情報</h2>
        <p v-for="(value,key) in info" :key="key">{{info}}</p>
    </div>
</template>

<script>
import Header from '../components/Header';
import Search from '../views/Search';
import axios from "axios"

export default {
    data(){
        return{
            access: "",
            info:[]
        }
    },
    name:"Search",
    props:["text"],
    components:{
        Header
    },
    views:{
        Search
    },
    mounted :function(){
            const item = axios.get(`/v1/?key=b65e720bb6d57313&large_area=Z011&format=json&name=${this.text}`)
            .then(
            response => {console.log(response.data.results.shop)
            this.info = response.data.results.shop})
            .catch(response=>console.log(response));
    const fooddata = item.data
    this.access = fooddata.access   
    }
}
</script>