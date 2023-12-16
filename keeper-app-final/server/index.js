const express = require("express")
const cors = require("cors")
const mongoose =  require("mongoose")

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

const uri = 'mongodb+srv://jag2430:Smarttwo2@cluster0.j4sya0l.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error);
    }
}

connect();

const keeperSchema = {
    title: String,
    content: String
}

const Keeper = mongoose.model("Keeper", keeperSchema);

app.get("/api/getAll",(req,res)=> {
    Keeper.find({}).then(function(KeeperList){
        res.send(KeeperList);
    })
})

app.post("/api/addNew",(req,res)=> {
    const {title, content} = req.body;
    const keeperObj = new Keeper({
        title: title,
        content:content
    }); 
    keeperObj.save();
    res.redirect("/api/getAll");
})

app.post("/api/delete",(req,res)=> {
    const {id} = req.body;
    Keeper.deleteOne({_id:id}).then(function(){
        res.redirect("/api/getAll");
    })
})


app.listen(5000, ()=> {
    console.log("backend created at port 5000");
})
