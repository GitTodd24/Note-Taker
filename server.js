const express=require("express");
const route=require("./routes/index.js")

const PORT=process.env.PORT || 3001;

const app=expres();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(routes);



app.listen(PORT, ()=>{
    console.log("App is listening at http://localhost:"+PORT)
})

