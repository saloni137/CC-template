const User = require('../../database/mongodb/models/user');
const dbService = require('../../database/mongodb/dbService');
const { validateUserUpdate } = require('../../utils/validation/userValidation');

const userModel = dbService(User);

const updateUseCase = async (id, params) => {
  const {
    error, message
  } = validateUserUpdate(params);
  if (error) {
    return message;
  }
  const res = await userModel.updateOne({ _id: id },params);
  return res;
};

module.exports = updateUseCase;
