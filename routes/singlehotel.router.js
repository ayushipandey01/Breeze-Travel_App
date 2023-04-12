const express = require('express');
const Hotel = require('../model/hotel.model');
const router = express.Router();

router.route("/:id")
    .get(async (req , res) => {
        try {
            const { id } = req.params ;
            const hotel = await Hotel.findById(id);
            res.json(hotel);
        } catch (error) {
            res.status(404).json({message : "Hotel not found"})
        }
    })

module.exports = router;