const mongoose = require("mongoose");
mongoose.connect("").then(() => console.log('Database connection successful'))
.catch(err => console.error('Database connection error:'));
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    image: String 
})
module.exports=mongoose.model("user",userSchema);