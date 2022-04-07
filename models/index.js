require("dotenv").config();
const { Sequelize } = require("sequelize");
const setupUser = require("./users");
const setupFlavor = require("./Flavours");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database/icecreams.sqlite",
  });

  const User = setupUser(sequelize);
  const Flavour = setupFlavor(sequelize);

Flavour.hasMany(User, { foreignKey: "flavour_id" });
User.belongsTo(Flavour, { foreignKey: "flavour_id", targetKey: "id" });

module.exports = {Flavour, User}