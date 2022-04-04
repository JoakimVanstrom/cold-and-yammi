const { DataTypes, Model } = require("sequelize");

class users extends Model {}

module.exports = (sequelize) => {
 users.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flavour: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    voted: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
      sequelize,
      modelName: 'users',
      timestamps: false
  }
  );
  return users
}
