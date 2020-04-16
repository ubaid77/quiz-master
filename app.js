var express = require("express"),
    bodyParser = require("body-parser")
    app     = express();




app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req ,res){
    res.render("start",{title:"Welcome"})
})
app.get("/preference", function(req, res){
    res.render("pref",{title:"Lets get Started"})
})
app.get("/quiz",function(req, res){
    res.render("quiz",{title:"Quiz"})
})
app.get("/end", function(req, res){
    res.render("end",{title:"Game over"})
})





app.listen(app.get("port"), function(){
    console.log("Server started at "+app.get("port"))
})