const { List } = require("../models/models");
module.exports.createList = (req, res) => {
    List.create(req.body)
        .then(i => res.json(i))
        .catch(err => res.status(400).json(err));
}
module.exports.getAllLists=(req,res)=>{
    List.find().collation({locale: "en" }).sort({name:1})
    .then(i=>res.json(i))
    .catch(e=>res.json(e))
    }
module.exports.getList=(req,res)=>{
    List.findById(req.params.id)
    .then(i=>res.json(i))
    .catch(e=>res.json(e))
}
module.exports.deleteList=(i,j)=>{
    List.findByIdAndDelete(i.params.id)
    .then(e=>j.json(e))
    .catch(e=>j.jason(e))
}
module.exports.updateList=(req,res)=>{
    List.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    .then(e=>res.json(e))
    .catch(e=>res.status(400).json(e))
}
