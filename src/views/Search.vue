<template>
    <div>
        <Header/>
        <div class = "item">
            <input placeholder="キーワード" v-model="text">
            <button @click="transition()">検索</button>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header';
export default {
    name:"Search",
    components:{
        Header
    },  
    methods:{
        transition(){
            this.$router.push({name:"Searchresult"})
        }
    },
    data(){
        return{
            text:null,
        }
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