const express = require("express");
const indexRouter = require('./routes/index');
const javaRouter = require('./routes/JSRoute');

const app = express();
let name = "world"
app.use(express.urlencoded({
    extended: true
  }))

app.post('/inputName',(req,res) => {
    console.log(req.body.username)
    name = req.body.username
})

app.get('/name',(req,res) => {
    res.send(JSON.stringify(name))
})

app.get('/date',(req,res) => {
    const d = new Date()
    arrayJSON = JSON.stringify( d.toUTCString())
    res.send(arrayJSON) 
})


app.use(indexRouter)
app.use(javaRouter)

app.listen(3000, () => {
  console.log("Server is running...");
});