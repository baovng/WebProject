<template>
    <div class="home">
        <div class="superforg-container">
            <div class="content">
                <h1>Add TCU spirit to your Event!</h1>
                <p>Request SuperFrog, TCU Cheerleaders, & Showgirls to your wedding, grad party, and more!</p>
            </div>
            <video class ="video-frog" controls autoplay>
                <source src="../assets/media/superfrog.mp4" type="video/mp4">
            </video>
        </div>


    </div>
</template>

<style scoped>

    .home { 
        width: 100%;

    }
    .superfrog-container {
        position: relative;
    }
    .content{
        position: absolute;
        color: #fff;
        top:50%;
        left:30%;
        transform: translate(-50%,-10%);
        text-align: left;
        font-family: Arial, Helvetica, sans-serif; 
        font-size: 20px;
        line-height: 40px;
    }
    video{
        width: 100%;
        height: 100vh;
    }
</style>