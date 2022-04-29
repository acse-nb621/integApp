var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/integrated_app");
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