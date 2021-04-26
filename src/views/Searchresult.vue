<template>
    <div class = "wrapper">
        <Header/>
        <h2>{{text}}についての情報</h2>
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
    views:{
        Search
    },
    mounted :function(){
        axios.get(`/v1/?key=b65e720bb6d57313&large_area=Z011&name=${this.text}&format=json`,
        {
            params:{
                results:'10'
            }
        })
        .then((response) => this.users = response.data.results)
        .catch(response => console.log(response))
    }
}
</script>