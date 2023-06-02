const User = require('../../database/mongodb/models/user');
const dbService = require('../../database/mongodb/dbService');

const userModel = dbService(User);

const getUseCase = async (id) => {
  const res = await userModel.findById(id);
  return res;
};

module.exports = getUseCase;
