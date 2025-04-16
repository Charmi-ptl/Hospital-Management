const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other', 'male', 'female', 'other'], // allow lowercase too
    required: true
  },
  
});

module.exports = mongoose.model('Patient', patientSchema);
