const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database/icecreams.sqlite",
});

const flavour = require("./flavour")(sequelize, DataTypes);
const user = require("./users")(sequelize, DataTypes);

flavour.sync({ force: true }).then(() => {
  flavour.bulkCreate([
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


user.sync({ force: true }).then(() => {
  user.bulkCreate(
    [{ username: "admin", email: "jokko@test.se", voted: 0 }]
    );
});
