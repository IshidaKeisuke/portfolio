<template>
  <div>
    <Header/>
    <main>
      <div class="main">
        <div class = "content">
          <p @click="$router.push('/Search')">こちらから検索</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.main{
  background: url("https://images.unsplash.com/photo-1525622471818-78bd7e8afc7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80");
  padding: 30%;
  background-size: cover;
  
}
.content p{
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-align: center;
  cursor: pointer;
  background-color: black;
  border-radius: 20px;
  padding: 20px;
  opacity: 2;
}
</style>

<script>
import Header from '../components/Header';
export default {
  components: {
    Header
  }
};
</script>

