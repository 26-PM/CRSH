const express=require("express");
const app=express();
const path=require("path")

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res) => {
    // Render the "index" view using EJS
    res.render("index");
});
app.get("/read", (req, res) => {
    // Render the "index" view using EJS
    res.render("read");
});

app.post("/create",(req,res)=>{
    console.log(req.body);
})


app.listen(3000);

