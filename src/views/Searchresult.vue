<template>
    <div class = "wrapper">
        <Header/>
        <h2>{{text}}についての情報</h2>
        <p v-for="(value,key) in info" :key="key"></p>
        <p>{{value.access}}</p>
    </div>
</template>

<script>
import Header from '../components/Header';
import Search from '../views/Search';
import axios from "axios"

export default {
    data(){
        return{
            access: [],
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
            axios.get(`/v1/?key=b65e720bb6d57313&large_area=Z011&format=json&name=${this.text}`)
            .then(
            response => {console.log(response.data.results.shop)
            response.data.results.shop[0].access})
            .catch(response=>console.log(response));
    // const fooddata = item.data
    // this.access = fooddata.access   
    }
}
</script>