const { DataTypes, Model } = require("sequelize");

class flavour extends Model {}

 module.exports = (sequelize) => {
  flavour.init({
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
      modelName: 'flavours',
      timestamps: false
  }
  );
  return flavour
}
