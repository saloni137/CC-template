const createUseCase = require('../../usecase/user/create');
const getUseCase = require('../../usecase/user/get');
const listUseCase = require('../../usecase/user/list');

const user = require('./user');

module.exports = {
  create: user.create(createUseCase),
  get: user.get(getUseCase),
  list: user.list(listUseCase),
};
