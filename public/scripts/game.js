var allQuestions = [],
    score = 0,
    questionCounter = 0,
    index = 0,
    remainingQuestions =[],
    currentQuestion={},
    progressPercent = 0;
    choices = document.getElementsByClassName("options"),
    progressBar = document.getElementById("progress"),
    quizCategory = localStorage.getItem("category"),
    quizDifficulty = localStorage.getItem("difficulty");
    quizUrl = "https://opentdb.com/api.php?amount=10&category="+quizCategory+"&difficulty="+quizDifficulty;

startGame()
async function getData(){
    await fetch(quizUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
            allQuestions = [...data["results"]]
            
        })
    
}

async function startGame(){
    await getData();
    score=0;
    questionCounter=0;
    progressBar.style.width=progressPercent+"%"
    remainingQuestions = [...allQuestions]
    generateQuestions(allQuestions)
}

function generateQuestions(remainingQuestions){
    if(remainingQuestions.length<1){
        setTimeout(function () {
            localStorage.setItem("score",score)
            window.location = "/end";
         }, 2000)
    }else{
        questionCounter++;
        progressPercent+=10;
        progressBar.style.width = progressPercent+"%";
        index = Math.floor(Math.random()*(remainingQuestions.length))
        currentQuestion=remainingQuestions[index]
        displayQuestions(currentQuestion)
    }
    
}

function displayQuestions(currentQuestion){
    let options = [...currentQuestion["incorrect_answers"]]
    options.push(currentQuestion["correct_answer"])
    shuffledOptions = shuffleArray(options)
    document.getElementById("counter").innerHTML=(questionCounter+"/10");
    document.getElementById("score").innerHTML = ("Score: "+score);
    document.getElementById("question").innerHTML=currentQuestion["question"]

    
    for(var i=0;i<choices.length; i++){
        choices[i].innerHTML = shuffledOptions[i]
    }
    remainingQuestions.splice(index, 1);
    // evaluate(currentQuestion,choices)
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}


    for(var i=0;i<choices.length; i++){
        choices[i].addEventListener("click",function(){
            
            if(this.innerHTML == currentQuestion["correct_answer"]){
                this.classList.add("correct")
                score+=10
                setTimeout( () =>{
                    this.classList.remove("correct")
                    generateQuestions(remainingQuestions)
                },1500)
                 
                
                
            }else{
                this.classList.add("incorrect")
                setTimeout( () =>{
                    this.classList.remove("incorrect")
                    generateQuestions(remainingQuestions)
                },1500)
                
            }
        })
    }




