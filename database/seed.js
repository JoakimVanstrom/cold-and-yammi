const { User, Flavour } = require("../models");


Flavour.bulkCreate([
    { title: "Fruity-explossion", totalVotes: 0 },
    { title: "Pear-mint", totalVotes: 0 },
    { title: "Tripple-chocolate", totalVotes: 0 },
    { title: "Piña colada", totalVotes: 0 },
    { title: "Mai Tai", totalVotes: 0 },
    { title: "Butter Pecan", totalVotes: 0 },
    { title: "Mint Chocolate Chip", totalVotes: 0 },
    { title: "Chocolate Chip Cookie Dough", totalVotes: 0 },
    { title: "Rocky Road", totalVotes: 0 },
    { title: "Lemon Custard", totalVotes: 0 },
  ]);