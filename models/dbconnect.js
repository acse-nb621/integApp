var mongoose = require("mongoose");

const username = "nourhan-berjawi140";
const password = "u3Bek0XIaKtEHcji";
const cluster = "cluster0.ixjdr";
const dbname = "integrated_app";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = mongoose;
