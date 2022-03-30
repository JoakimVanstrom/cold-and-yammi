const {PromisedDatabase} = require('promised-sqlite3')

const db = new PromisedDatabase()

async function seed(){
    await db.open('./database/icecreams.db')

    await db.run(
        `
        INSERT INTO icecreams('flavour', 'rating')
        VALUES 
        ('Fruity-explossion', 0),
        ('Pear-mint', 0),
        ('Vanilla-coke', 0),
        ('Tripple-chocolate', 0),
        ('Piña colada', 0),
        ('Mai Tai', 0),
        ('Butter Pecan', 0),
        ('Chocolate Chip Cookie Dough', 0),
        ('Lemon Custard', 0),
        ('Mint Chocolate Chip', 0)
        `)
    await db.close()
}

seed()