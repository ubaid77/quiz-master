var endScore = localStorage.getItem("score")

document.getElementById("score").innerHTML = endScore
document.getElementById("name").innerHTML = localStorage.getItem("userName")

if(parseInt(endScore)>50){
    document.getElementById("msg").innerHTML = "Well done! "
}else{
    document.getElementById("msg").innerHTML = "Hard luck :( "
}