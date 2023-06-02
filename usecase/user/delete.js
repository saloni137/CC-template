const User = require('../../database/mongodb/models/user');
const dbService = require('../../database/mongodb/dbService');

const userModel = dbService(User);

const deleteUseCase = async (id) => {
  const res = await userModel.deleteOne({ _id: id });
  return res;
};

module.exports = deleteUseCase;
