const User = require('../../database/mongodb/models/user');
const dbService = require('../../database/mongodb/dbService');

const userModel = dbService(User);

const getUseCase = async (params) => {
  const res = await userModel.findById(params);
  return res;
};

module.exports = getUseCase;
