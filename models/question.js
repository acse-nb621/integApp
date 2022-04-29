// // var mongoose = require("mongoose");
// // mongoose.connect("mongodb://localhost/integrated_app");

// // var mongoose = require("mongoose");
// // mongoose.connect("mongodb+srv://nourhan-berjawi140:u3Bek0XIaKtEHcji@cluster0.ixjdr.mongodb.net/integrated_app?retryWrites=true&w=majority");

// var mongoose = require("./dbconnect");

var con = require("./dbconnect");

var mongoose = con.mongoose;


var questionSchema = new mongoose.Schema({
    quesRank : String,
    ansType : String,
    title : String,
    options : [String],
    viewElem : [String],
    count : String,
    min : String,
    max : String
});

module.exports = mongoose.model("question", questionSchema);