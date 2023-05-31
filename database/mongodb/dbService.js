const mongoDbService = (Model) => {

  // for create one as well as create many documents
  const create = (data) => new Promise((resolve, reject) => {
    Model.create(data, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  // update single document
  const updateOne = (filter, data, options = { new: true }) => new Promise((resolve, reject) => {
    Model.findOneAndUpdate(filter, data, options, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  // delete single document
  const deleteOne = (filter, options = { new: true }) => new Promise((resolve, reject) => {
    Model.findOneAndDelete(filter, options, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  // find multiple documents
  const findAll = (filter) => new Promise((resolve, reject) => {
    let query = collection.find(filter?.query);
    if (filter?.options?.select) {
      query = query.select(options.select);
    }
    if (filter?.options?.populate) {
      query = query.populate(options.populate);
    }
    if (filter?.options?.lean) {
      query = query.lean();
    }
    query.exec((error, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });

  // count documents
  const count = (filter) => new Promise((resolve, reject) => {
    Model.countDocuments(filter, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  // find document by ID
  const findById = (id) => new Promise((resolve, reject) => {
    Model.findOne({ _id: id }, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  return Object.freeze({
    create,
    updateOne,
    deleteOne,
    findAll,
    count,
    findById
  });

};

module.exports = mongoDbService;
