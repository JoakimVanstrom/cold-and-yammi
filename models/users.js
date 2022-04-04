const { DataTypes, Model } = require("sequelize");

class users extends Model {}

module.exports = (sequelize) => {
 users.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
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
      modelName: 'users'
  }
  );
  return users
}
