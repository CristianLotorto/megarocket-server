const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Activity', activitySchema);
