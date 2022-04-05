const { DataTypes, Model } = require("sequelize");
const sequelize = require('./database');

class Flavour extends Model {}

 
  Flavour.init({
    flavour_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalVotes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
      sequelize,
      modelName: 'Flavour',
      timestamps: false
  }
  )

module.exports = Flavour;