let mongoose = require('../connection.js');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const schema = new Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  name: { type: String },
  userType: {
    type: Number,
    enum: convertObjectToEnum(USER_TYPES),
    required: true
  },
  isActive: { type: Boolean },
  isDeleted: { type: Boolean },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  mobileNo: { type: String },
  resetPasswordLink: {
    code: String,
    expireTime: Date
  },
  loginRetryLimit: {
    type: Number,
    default: 0
  },
  loginReactiveTime: { type: Date }
}
, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}
);
schema.pre('save', async function (next) {
  this.isDeleted = false;
  this.isActive = true;
  if (this.password) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

schema.pre('insertMany', async function (next, docs) {
  if (docs && docs.length) {
    for (let index = 0; index < docs.length; index++) {
      const element = docs[index];
      element.isDeleted = false;
      element.isActive = true;
    }
  }
  next();
});

schema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

schema.method('toJSON', function () {
  const {
    _id, __v, ...object
  } = this.toObject({ virtuals: true });
  object.id = _id;
  delete object.password;
  return object;
});

const user = mongoose.model('user', schema);
module.exports = user;
