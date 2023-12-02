var mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/abc")
.then(() => console.log("connected"))
.catch(() => console.log("error"))
var userschema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});
var users=mongoose.model("users",userschema);