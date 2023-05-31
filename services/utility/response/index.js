const responseStatus = require('./responseStatus');

module.exports = {
  success: (data = {}) => ({
    status: responseStatus.success,
    message: data.message || 'Your request is successfully executed',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),

  failure: (data = {}) => ({
    status: responseStatus.failure,
    message: data.message || 'Some error occurred while performing action.',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),

  internalServerError: (data = {}) => ({
    status: responseStatus.serverError,
    message: data.message || 'Internal server error.',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),

  badRequest: (data = {}) => ({
    status: responseStatus.badRequest,
    message: data.message || 'The request cannot be fulfilled due to bad syntax.',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),

  recordNotFound: (data = {}) => ({
    status: responseStatus.recordNotFound,
    message: data.message || 'Record(s) not found with specified criteria.',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),

  validationError: (data = {}) => ({
    status: responseStatus.validationError,
    message: data.message || `Invalid Data, Validation Failed.`,
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),

  unAuthorized: (data = {}) => ({
    status: responseStatus.unauthorized,
    message: data.message || 'You are not authorized to access the request',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),
};
