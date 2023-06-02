const User = require('../../database/mongodb/models/user');
const dbService = require('../../database/mongodb/dbService');

const userModel = dbService(User);

const getUseCase = async (params) => {
  const res = await userModel.findAll(params);
  return res;
};

module.exports = getUseCase;
