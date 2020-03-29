const router = require('express').Router();
const mongoose = require('mongoose');
const Co = mongoose.model('Document');
// router.get('/', async (req, res) => {
//     try {
//         const DataToDocument = await Data.find({}) 
//         res.send(DataToDocument);         
//     }
//     catch (error) {
//         res.status(500);
//     }
// })
router.get('/', async (req, res) => {
    try {
        const DataToDocument = await Co.find({}) 
        res.send(DataToDocument);         
    }
    catch (error) {
        res.status(500);
    }
})

router.post('/add', async (req, res) => {
    const data = new Co({
        firstName: req.body.fname,   
        lastName: req.body.lname
    });
    await data.save(data);   
    res.send(data);         
});

module.exports = router;