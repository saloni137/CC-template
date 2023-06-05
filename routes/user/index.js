const router = require('express').Router();

const {
  create, get, list, update, deleteData
} = require('../../controllers/user');

router.post('/create', create);
router.post('/list', list);
router.get('/:id', get);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteData);

module.exports = router;
