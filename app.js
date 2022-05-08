var express      = require("express"),
    bodyParser   = require("body-parser"),
    request      = require("request"),
    mongoose     = require("mongoose"),
    sessions     = require("express-session"),
    cookieParser = require("cookie-parser"),
    question     = require("./models/question"),
    option       = require("./models/option"),
    answer       = require("./models/answer");
const { json } = require("express/lib/response");



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://nourhan-berjawi140:u3Bek0XIaKtEHcji@cluster0.ixjdr.mongodb.net/integrated_app?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect();

 
var app = express();
var oneDay = 24*60*60*1000;

// mongoose.connect("mongodb://localhost/integrated_app");

// var answers = mongoose.model('answers', answer);



app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(sessions({
    secret: "nour's secret string",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.set('view engine','ejs');


// home page display
app.get("/",function(req,res){
    res.render("./landing");

});


app.get("/exit",function(req,res){
    res.render("./exit");

});


// app.post("/changeBaseAvatar",function(){
//     var
// });
function isPositiveInteger(str) {
    if (typeof str !== 'string') {
      return false;
    }
  
    const num = Number(str);
  
    if (Number.isInteger(num) && num > 0) {
      return true;
    }
  
    return false;
  } 


app.post("/submit", function(req,res){

    var ansNum = "ans"+req.body.quest;
    var ansId = req.sessionID;
    var ansVal = req.body.answer;
    var myJson = {
        [ansNum]: ansVal
    }

    nextQues = Number(req.body.quest)+1;
    answer.findByIdAndUpdate({_id: ansId},myJson,{upsert: true},function(err, result){
        if(err){
            console.log("err");
        }else{
            console.log("noerr");

        }

    })
});




//question display
app.get("/question/:number",async function(req,res){

    var quesNum = req.params.number.split(":");

        var myJson = {'quesRank' : quesNum};

 
        if((quesNum < 1) || (quesNum > 47) || (!isPositiveInteger(String(quesNum)))){
            res.render("./error");
        }else{
            var upAns = await answer.findById(req.sessionID).lean();

            question.findOne(myJson,function(err,returnVal){
                if(err){
                    console.log("uh-oh");
                }else{
                    var ansEntries = [];
                    if(upAns){
                        ansEntries = Object.entries(upAns);
                    }
                    var info = [returnVal,ansEntries];
                    
                    var ansType = returnVal.ansType;
             
                    res.render(ansType,{info: info});
        
                    
                }  
            });
        }    
});




app.listen(process.env.PORT || 3000);
