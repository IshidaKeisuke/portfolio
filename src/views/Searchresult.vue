<template>
    <div class = "wrapper">
        <Header/>
        <h2>{{text}}についての情報</h2>
        <div class = "content">
            {{info}}
        </div>
    </div>
</template>

<script>
import Header from '../components/Header';
import Search from '../views/Search';
import axios from "axios"

export default {
    name:"Search",
    props:["text"],
    components:{
        Header
    },
    data:() => ({
        info:""
    }),
    views:{
        Search
    },
    mounted :function(){
        axios.get(`/v1/?key=b65e720bb6d57313&large_area=Z011&format=json&=name${this.text}`)
        .then(response => {console.log(response.data.results.shop)})
        .catch(response=>console.log(response));
    }
}
</script>