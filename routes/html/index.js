const router=require("express").Router()
const path=require("path");



router.get("/notes", (req, res)=>{
    res.sendFile(path.join(_dirname, "../../public/notes.html"))
})


router.get("*", (req, res)=>{
    res.sendFile(path.join(_dirname, "../../public/index.html"))
})




module.exports=router;