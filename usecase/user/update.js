const User = require('../../database/mongodb/models/user');
const dbService = require('../../database/mongodb/dbService');

const userModel = dbService(User);

const updateUseCase = async (id,params) => {
  const res = await userModel.updateOne({ _id: id },params);
  return res;
};

module.exports = updateUseCase;
