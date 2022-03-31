const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/icecreams.sqlite'
})

const flavour = require('./flavour')(sequelize, DataTypes)

flavour.sync().then(() => {
    flavour.create({
        title: 'Fruity-explossion',
        like: 2,
        dislike: 1,
        totalVotes: 3
    }),
    flavour.create({
        title: 'Pear-mint',
        like: 2,
        dislike: 1,
        totalVotes: 3
    }),
    flavour.create({
        title: 'Tripple-chocolate',
        like: 2,
        dislike: 1,
        totalVotes: 3
    }),
    flavour.create({
        title: 'Piña colada',
        like: 2,
        dislike: 1,
        totalVotes: 3
    }),
    flavour.create({
        title: 'Mai Tai',
        like: 2,
        dislike: 1,
        totalVotes: 3
    }),
    flavour.create({
        title: 'Butter Pecan',
        like: 2,
        dislike: 1,
        totalVotes: 3
    }),
    flavour.create({
        title: 'Mint Chocolate Chip',
        like: 2,
        dislike: 1,
        totalVotes: 3
    }),
    flavour.create({
        title: 'Chocolate Chip Cookie Dough',
        like: 2,
        dislike: 1,
        totalVotes: 3
    }),
    flavour.create({
        title: 'Lemon Custard',
        like: 2,
        dislike: 1,
        totalVotes: 3
    })

})


