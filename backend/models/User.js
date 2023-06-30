const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

userSchema.pre('save', async function (next) {
  const doc = this;
  if (doc.isNew) {
    const lastUser = await User.findOne({}, {}, { sort: { id: -1 } });
    const lastUserId = lastUser ? lastUser.id : 0;
    doc.id = lastUserId + 1;
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
