// var mongoose = require("./dbconnect");


// // const { MongoClient, ServerApiVersion } = require('mongodb');
// // const uri = "mongodb+srv://nourhan-berjawi140:u3Bek0XIaKtEHcji@cluster0.ixjdr.mongodb.net/integrated_app?retryWrites=true&w=majority";
// // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// // client.connect();

var con = require("./dbconnect");

var mongoose = con.mongoose;


var answerSchema = new mongoose.Schema({
    _id: String,
    ans1 : String,
    ans2 : String,
    ans3 : String,
    ans4 : String,
    ans5 : String,
    ans6 : String,
    ans7 : String,
    ans8 : String,
    ans9 : String,
    ans10 : String,
    ans11 : String,
    ans12 : String, 
    ans13 : String,  
    ans14 : String,
    ans15 : String,
    ans16 : String,
    ans17 : String,
    ans18 : String,
    ans19 : String,
    ans20 : String,
    ans21 : String,
    ans22 : String,
    ans23 : String,
    ans24 : String,
    ans25 : String,
    ans26 : String,
    ans27 : String,
    ans28 : String,
    ans29 : String,
    ans30 : String,
    ans31 : String,
    ans32 : String,
    ans33 : String,
    ans34 : String,
    ans35 : String,
    ans36 : String,
    ans37 : String,
    ans38 : String,
    ans39 : String,
    ans40 : String,
    ans41 : String,
    ans42 : String,
    ans43 : String,
    ans44 : String,
    ans45 : String,
    ans46 : String,
    ans47 : String,
    ans40 : String,
    ans48 : String,
    avatar: String
});

module.exports = mongoose.model("answer", answerSchema);