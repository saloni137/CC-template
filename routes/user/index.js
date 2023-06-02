const router = require('express').Router();

const {
  create, get, list,
} = require('../../controllers/user');

router.post('/', create);
router.get('/:id', get);
router.post('/list', list);

module.exports = router;
