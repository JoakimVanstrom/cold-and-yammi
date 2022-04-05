const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: "sqlite",
    host: "database/icecreams.sqlite",
  });


  module.exports = sequelize;