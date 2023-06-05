const User = require('../../database/mongodb/models/user');
const dbService = require('../../database/mongodb/dbService');

const userModel = dbService(User);

const getUseCase = async (params) => {
  const list = await userModel.findAll(params);
  const count = await userModel.count(params);
  
  return {
    count,
    list,
  };
};

module.exports = getUseCase;
