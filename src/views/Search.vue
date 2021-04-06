<template>
    <div>
        <Header/>
        <div class = "item">
            <input placeholder="キーワード">
            <button>検索</button>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header';
import axios from "axios";
export default {
    components:{
        Header
    },
    async created(){
    const item = await axios.get(
        `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=[b65e720bb6d57313]&large_area=Z011`
    );
    const fooddata = item.data;
    this.name = fooddata.name
    }
}
</script>

<style>
input{
    padding: 8px 20px 8px 7px;
    border-radius: 10px;
}
button{
    padding: 8px 20px 8px 7px;
    cursor: pointer;
    border-radius: 10px;   
}
.item{
    text-align: center;
    background: url("https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80");
    padding: 25%;
    background-position: left;
}
</style>