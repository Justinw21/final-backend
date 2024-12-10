/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT, //allow for large text field
    allowNull: true
  },

  // completed campus model with missing information

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.ebayimg.com/images/g/F94AAOSw5lRnB~Aa/s-l1600.jpg',
    allowNull: true
  }
});

// Export the campus model
module.exports = Campus;