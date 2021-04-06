<template>
    <div class = "header">
        <p @click="$router.push('/')">TOP</p>
        <div class = "New">
            <p @click="$router.push('/Signup')">新規会員登録</p>
            <p @click="$router.push('/Login')">ログイン</p>
        </div>
    </div>
</template>

<style>
    .header{
        background-color: rgba(0,0,255,0.1);
        padding: 30px;
        display: flex;
        justify-content: space-between;
        font-size: 25px;
        font-family: cursive;
    }
    .header p{
        cursor: pointer;
        margin-left: 20px;
    }
    .New{
        margin-right: 40px;
        display: flex;
        letter-spacing: 2px;
    }
    .New p{
        margin-right: 25px;
    }
</style>