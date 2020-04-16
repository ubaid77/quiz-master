var username = document.getElementById("user")
var category = document.getElementById("ctgry")
var difficulty   = document.getElementById("dfclty")
var btn      = document.getElementById("go")
username.addEventListener("keyup",function(){
    btn.disabled = !username.value
})

btn.addEventListener("click",function(){
    localStorage.setItem("userName",username.value)
    localStorage.setItem("category",category.value)
    localStorage.setItem("difficulty",difficulty.value)
    window.location="/quiz"
})