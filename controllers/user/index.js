const createUseCase = require('../../usecase/user/create');
const getUseCase = require('../../usecase/user/get');
const listUseCase = require('../../usecase/user/list');
const updateUseCase = require('../../usecase/user/update');
const deleteUseCase = require('../../usecase/user/delete');

const user = require('./user');

module.exports = {
  create: user.create(createUseCase),
  get: user.get(getUseCase),
  list: user.list(listUseCase),
  update: user.update(updateUseCase),
  deleteData: user.deleteData(deleteUseCase),
};
