const mongoDbService = (Model) => {

  // for create one as well as create many documents
  const create = (data) => new Promise((resolve, reject) => {
    Model.create(data)
      .then((createdDoc) => {
        resolve(createdDoc);
      })
      .catch((error) => {
        console.error('Error creating document:', error);
        reject(error);
      });
  });

  // update single document
  const updateOne = (filter, data, options = { new: true }) => new Promise((resolve, reject) => {
    Model.findOneAndUpdate(filter, data, options)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.error('Error :', error);
        reject(error);
      });
  });

  // delete single document
  const deleteOne = (filter, options = { new: true }) => new Promise((resolve, reject) => {
    Model.findOneAndDelete(filter, options)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.error('Error :', error);
        reject(error);
      });;
  });

  // find multiple documents
  const findAll = (params) => new Promise((resolve, reject) => {
    let query = Model.find(params?.filter)
      .select(params?.select)
      .populate(params?.populate)
      .skip(params?.page)
      .limit(params?.limit)
      .sort(params?.sortBy)
      .lean();

    query.exec()
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.error('Error document:', error);
        reject(error);
      });;
  });

  // count documents
  const count = (filter) => new Promise((resolve, reject) => {
    Model.countDocuments(filter)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.error('Error document:', error);
        reject(error);
      });
  });

  // find document by ID
  const findById = (id) => new Promise((resolve, reject) => {
    Model.findOne({ _id: id })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.error('Error document:', error);
        reject(error);
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
