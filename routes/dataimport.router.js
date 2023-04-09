const express = require('express');

const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels");

const router = express.Router();

router.route("/")
    .post(async(req , res) => {
        try {
            // await Hotel.remove();
            const hotelsInDB = await Hotel.insertMany(hotels.data);
            res.json(hotelsInDB);
        } catch (error) {
            console.log(error);
            res.json({ message : "Could not add to DB"})
        }        
    })

module.exports = router;

