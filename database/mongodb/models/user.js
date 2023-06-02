const mongoose = require('mongoose');

const { Schema } = mongoose;
const schema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, },
);

const User = mongoose.model('users-test', schema);
module.exports = User;
