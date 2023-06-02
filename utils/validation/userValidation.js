const Joi = require('joi');

const validateUserCreate = (params) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .trim()
      .min(1)
      .max(200)
      .required()
      .regex(/^[a-zA-Z ]*$/),
    lastName: Joi.string()
      .trim()
      .min(1)
      .max(200)
      .regex(/^[a-zA-Z ]*$/)
      .required(),
    username: Joi.string()
      .trim()
      .min(1)
      .max(60)
      .required(),
  });

  const {
    value, error
  } = schema.validate(params);

  return {
    value,
    error,
    message: { message: error?.details?.[0]?.message }
  };
};

const validateUserUpdate = (params) => {
  const schema = Joi.object({
	  firstName: Joi.string()
      .trim()
      .min(1)
      .max(200)
      .regex(/^[a-zA-Z ]*$/),
	  lastName: Joi.string()
      .trim()
      .min(1)
      .max(200)
      .regex(/^[a-zA-Z ]*$/),
	  username: Joi.string()
      .trim()
      .min(1)
      .max(60),
  });
  
  const {
	  value, error
  } = schema.validate(params);
  
  return {
	  value,
	  error,
	  message: { message: error?.details?.[0]?.message }
  };
};

module.exports = {
  validateUserCreate,
  validateUserUpdate 
};