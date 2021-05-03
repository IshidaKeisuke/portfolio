<template>
    <div class = "wrapper">
        <Header/>
        <h2>{{text}}についての情報</h2>
        <table v-for="(value,key) in info" :key="key">
            <tr>
                <th>店名
                <th>最寄り駅
                <th>住所
                <th>収容可能人数
                <th>ジャンル</th>
            </tr>
            <tr>
                <td>{{value.name}}</td>
                <td>{{value.access}}</td>
                <td>{{value.address}}</td>
                <td>{{value.capacity}}人</td>
                <td>{{value.genre.name}}</td>
            </tr>
        </table>   
    </div>
</template>

<script>
import Header from '../components/Header';
import Search from '../views/Search';
import axios from "axios"

export default {
    data(){
        return{
            info:"",
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
                this.info = response.data.results.shop})
                .catch(response=>console.log(response));
    }
}
</script>

<style scoped>
.wrapper h2{
    text-align: center;
    font-size: 25px;
    margin-top: 5%;
}
table{
    margin: 6%;
}
th,td{
    border: 1px solid #aaaaaa;
    padding: 15px;
}
</style>