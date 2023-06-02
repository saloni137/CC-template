const User = require('../../database/mongodb/models/user');
const dbService = require('../../database/mongodb/dbService');

const userModel = dbService(User);

const createUseCase = async (params) => {
  const res = await userModel.create(params);
  return res;
};

module.exports = createUseCase;
