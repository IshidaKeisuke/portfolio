<template>
    <div class = "wrapper">
        <div class = "image">
            <div class = "text">
                <p>PROFILE</p>
            </div>
            <div class = "items">
                <div class = "item">
                    <p><img src = "../assets/Homeicon.png" />HOME</p>
                </div>
                <div class = "item">
                    <p><img src = "../assets/頭のアイコン.png">PROFILE</p>                
                </div>
                <div class = "item">
                    <p><img src = "../assets/ランニングアイコン1.png">LOGOUT</p>                
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image{
    border-radius: 20px;
    border: 1px solid black;
    padding: 45px;
    width: 5%;
    float: left;
}
img{
    width: 50px;
    display: block;
    padding: 10px;
}
.items{
    margin-right: 50px;
}
.text p{
    text-align: center;
}
.item{
    display: inline-block;
    padding-left: 25%;
}

</style>