const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true // Removes extra spaces from " John " -> "John"
  },
  email: { 
    type: String, 
    unique: true, 
    required: true,
    trim: true, // Critical: prevents login fails if you copy-paste with a space
    lowercase: true // Forces "Admin@gmail.com" to "admin@gmail.com"
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ['Admin', 'Teacher', 'Student'], 
    required: true 
  },
  course: { 
    type: String, 
    default: '' // Correct: Matches your seed script strings
  } 
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);  