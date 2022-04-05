const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./database');

const Flavour = require("./Flavours")(sequelize, DataTypes);
const User = require("./users")(sequelize, DataTypes);

sequelize.sync({ force: true }).then(() => {
  Flavour.bulkCreate([
    { title: "Fruity-explossion", totalVotes: 2 },
    { title: "Pear-mint", totalVotes: 4 },
    { title: "Tripple-chocolate", totalVotes: 2 },
    { title: "Piña colada", totalVotes: 5 },
    { title: "Mai Tai", totalVotes: 2 },
    { title: "Butter Pecan", totalVotes: 9 },
    { title: "Mint Chocolate Chip", totalVotes: 2 },
    { title: "Chocolate Chip Cookie Dough", totalVotes: 2 },
    { title: "Rocky Road", totalVotes: 1337 },
    { title: "Lemon Custard", totalVotes: 2 },
  ]);
});


User.sync({ force: true }).then(() => {
  User.bulkCreate(
    [{ email: "jokko@test.se", flavour: 'peachy', voted: 0 }]
    );
});

module.exports = sequelize;