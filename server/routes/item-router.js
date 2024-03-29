const express = require('express');

const ItemController = require('../controllers/item-controller');

const router = express.Router();

// router.get('/test', (req, res) => {
//     res.send('testsucceed');
// }); 

// router.get('/test', ItemController.testRoute);

router.get('/items', ItemController.getItems);
router.get('/item/:id', ItemController.getItemById);
router.post('/item', ItemController.createItem);
router.put('/item/:id', ItemController.updateItem);
router.delete('/item/:id', ItemController.deleteItem);

module.exports = router;
