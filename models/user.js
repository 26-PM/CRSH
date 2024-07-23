const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://root:root@anonymessage.sx3fsbh.mongodb.net/?retryWrites=true&w=majority&appName=anonyMessage").then(() => console.log('Database connection successful'))
.catch(err => console.error('Database connection error:'));
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    image: String 
})
module.exports=mongoose.model("user",userSchema);