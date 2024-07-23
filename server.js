const express=require("express");
const app=express();
const path=require("path")
const userModel=require("./models/user")

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res) => {
    // Render the "index" view using EJS
    res.render("index");
});
app.get("/read", async(req, res) => {
    let users=await userModel.find();
    res.render("read",{users});
});

app.post("/create",async(req,res)=>{
    let {name,email,img}=req.body;
    let createdUser =  await  userModel.create({
        name,
        email,
        image:img   
    })
    // res.send(createdUser)
    res.redirect("/read");
})

app.get("/delete/:id",async(req,res)=>{
    let id=req.params.id;
    let deletedUser=await userModel.findByIdAndDelete(id);
    res.redirect("/read");

})


app.listen(3000);

