const router = require('express').Router();

const {
  create, get, list, update, deleteData
} = require('../../controllers/user');

router.post('/', create);
router.post('/list', list);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', deleteData);

module.exports = router;
