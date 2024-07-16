
const express = require("express");
const router = express.Router();

const Dish = require("../models/dish");

router.get("/", async (req, res)=>{

    try{
        const dishesData = await Dish.find();        
        res.status(200).send(dishesData);
    }catch(err){
        res.status(400).send(err);
    }    

})

router.post("/", async (req, res)=>{

    try{
        const dish = new Dish(req.body);

        const result = await dish.save();
        // console.log("result : ", result);

        res.status(201).send(result);
    }catch(err){
        res.status(400).send(err);
    }

})

router.put("/", async (req, res)=>{

    try{
        const dishItem = req.body;

        await Dish.findOneAndUpdate({dishId : dishItem.dishId}, {isPublished : dishItem.isPublished});

        const result = await Dish.find({dishId : dishItem.dishId});        
        res.status(201).send(result);
    }catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;