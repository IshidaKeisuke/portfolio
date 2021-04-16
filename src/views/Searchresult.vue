<template>
    <div class = "wrapper">
        <Header/>
        <h2>{{name}}についての情報</h2>
    </div>
</template>

<script>
import Header from '../components/Header';
import Search from '../views/Search';
import axios from "axios"

export default {
    components:{
        Header
    },
    views:{
        Search
    },
    data(){
        return{
            name:"",
        };
    },
    props:["name"],
    async created(){
    const item = await axios.get(
        `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=b65e720bb6d57313&large_area=Z011&name={this.name}`
    );
    const fooddata = item.data;
    this.name = fooddata.name
    console.log(item);
    }
}
</script>