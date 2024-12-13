/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  // completed student model with missing information
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.ebayimg.com/images/g/F94AAOSw5lRnB~Aa/s-l1600.jpg',
    allowNull: true
  },

  gpa: {
    type: Sequelize.FLOAT, //allow decimals
    allowNull: true,
    validate: {
      min: 0.0, // GPA cannot be below 0.0
      max: 4.0  // GPA cannot exceed 4.0
    }
  }

});

// Export the student model
module.exports = Student;