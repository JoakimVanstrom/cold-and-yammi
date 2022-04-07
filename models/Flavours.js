const { DataTypes, Model } = require("sequelize");

module.exports = database => {
class Flavour extends Model {}

 
  Flavour.init({
    id: {
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
      sequelize: database,
      modelName: 'Flavour',
      timestamps: false
  }
  )
  return Flavour
}