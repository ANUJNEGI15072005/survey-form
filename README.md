<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Survey Form</title>
    <style>
      *{
    background-color: white;
    margin: 0px;
    padding: 0px;
}
body{
    display: grid;
    justify-items: center;
}
header{
    color: white;
    background-color: lightblue;
    width: 100vw;
    height: 10vh;
    font-size: xxx-large;
    align-items: center;
    justify-items: center;
    font-weight: 100;
    display: inline-grid;
}
.main{
    width: 30vw;
    height: 175vh;
    background-color: lightblue;
    margin: 20px;
    border-radius: 10px;
}
.grid{
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    align-items: center;
    background-color: lightblue;
    width: 24vw;
    gap: 30px;
    margin-left: 35px;
    margin-top: 25px;
}
.item{
    padding: 10px;
    border-radius: 10px;
    text-align: justify;
}
.keyword{
    margin-bottom: 5px;
}

.sub{
    margin-top:10vh ;
    margin-left: 20vw;
    width: 8vw;
    height: 8vh;
    border-radius: 6px;
    font-size: larger;
    background-color: #8dbbc7;
    color: white;
}
.box{
    padding: 5px;
    width: 265px;
}
@media only screen and  (max-width : 2560px) {
    .box{
        width: 500px;
    }
} 
@media only screen and  (max-width : 1440px){
    .box{
        width: 265px;
    }
} 
@media only screen and  (max-width :1024px) {
    .box{
        width: 187px;
    }
    .grid{
        margin-left: 25px;
    }
    .sub{
        margin-left: 18vw;
        width: 9vw;
    }
} 
@media only screen and  (max-width : 768px){
    .box{
        width: 210px;
    }
    .grid{
        margin-left: 22px;
    }
    .main{
        width: 40vw;
    }
    .sub{
        margin-left: 25vw;
        width: 12vw;
    }
} 
@media only screen and  (max-width : 426px){
    .box{
        width: 205px;
    }
    header{
        font-size: xx-large;
    }
    .main{
        width: 70vw;
        height: 1100px;
    }
    .sub{
        margin-left: 45vw;
        width: 21vw;
    }
} 
@media only screen and  (max-width : 376px){
    .box{
        width: 185px;
    }
    header{
        font-size: x-large;
    }
    .main{
        width: 70vw;
    }
    .sub{
        margin-left: 42vw;
        width: 23vw;
    }
} 
@media only screen and  (max-width : 321px){
    .box{
        width: 180px;
    }
    header{
        font-size: x-large;
    }
    .main{
        width: 84vw;
    }
    .sub{
        margin-left: 54vw;
        width: 26vw;
    }
}   
    </style>
  
</head>

<body style="overflow-x: hidden;">
    <header>
        STUDENT SURVEY FORM
    </header>
    <div class="main">
        <div class="grid">
            <div class="item">
                <div class="keyword">NAME :</div>
                <input class="box" type="text" placeholder="ENTER YOUR NAME">
            </div>
            <div class="item">
                <div class="keyword">EMAIL-ID :</div>
                <input class="box" type="text" placeholder="ENTER YOUR EMAIL-ID">
            </div>
            <div class="item">
                <div class="keyword">AGE :</div>
                <input class="box" type="text" placeholder="ENTER YOUR AGE">
            </div>
            <div class="item">
                <div class="keyword">CLASS :</div>
                <input class="box" type="text" placeholder="ENTER YOUR CLASS">
            </div>
            <div class="item">
                <div class="keyword">School Type :</div>
                <input type="radio" name="schl" id="schl1" value="Private">
                <label for="schl1">Private</label>
                <br>
                <input type="radio" name="schl" id="schl2" value="Govt">
                <label for="schl2">Govt.</label>
            </div>
            <div class="item">
                <div class="keyword">SCHOOL NAME :</div>
                <input class="box" type="text" placeholder="ENTER YOUR SCHOOL NAME ">
            </div>
            <div class="item">
                <div class="keyword">SELECT COURSES :</div>
                <input type="checkbox" name="btech" id="btech">
                <label for="btech">B.Tech</label>
                <br>
                <input type="checkbox" name="bca" id="bca">
                <label for="bca">BCA</label>
                <br>
                <input type="checkbox" name="bcom" id="bcom">
                <label for="bcom">B.Com</label>
                <br>
                <input type="checkbox" name="bba" id="bba">
                <label for="bba">BBA</label>
                <br>
                <input type="checkbox" name="ba" id="ba">
                <label for="ba">BA</label>
                <br>
                <input type="checkbox" name="bsc" id="bsc">
                <label for="bsc">B.Sc</label>
            </div>
            <div class="item">
                <div class="keyword">Reason for the selected course :</div>
                <input class="box" type="text">
            </div>
        </div>
        <button class="sub">SUBMIT</button>
    </div>

</body>

</html>