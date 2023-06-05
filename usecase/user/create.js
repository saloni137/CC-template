const User = require('../../database/mongodb/models/user');
const dbService = require('../../database/mongodb/dbService');
const { validateUserCreate } = require('../../utils/validation/userValidation');

const userModel = dbService(User);

const createUseCase = async (params) => {
  const {
    error, message
  } = validateUserCreate(params);
  if (error) {
    return message;
  }
  const res = await userModel.create(params);
  return res;
};

module.exports = createUseCase;
