const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static(__dirname));

//get our app to body parse
//app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());


app.post("/add",(req,res)=>{
console.log(added);
res.send("result");
});
