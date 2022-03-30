const {PromisedDatabase} = require('promised-sqlite3');

const db = new PromisedDatabase()

async function setup(){
    await db.open('./database/icecreams.db')

    db.exec(`
    DROP TABLE IF EXISTS icecreams;
    DROP TABLE IF EXISTS users;

    CREATE TABLE icecreams (
        icecream_id INTEGER NOT NULL UNIQUE,
        flavour TEXT NO NULL,
        rating TEXT NO NULL,
        PRIMARY KEY(icecream_id AUTOINCREMENT)
    );

    CREATE TABLE users (
        message_id INTEGER NOT NULL UNIQUE,
        icecream_id INTEGER NOT NULL,
        userName TEXT NOT NULL,
        email TEXT NOT NULL,
        voted INTEGER NOT NULL CHECK (voted IS 0 OR voted IS 1),
        PRIMARY KEY(message_id AUTOINCREMENT),
        FOREIGN KEY(icecream_id)
        REFERENCES icecreams (icecream_id)
      );
    `)

    await db.close()
}

setup()