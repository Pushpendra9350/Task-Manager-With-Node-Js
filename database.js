const sequelize = require("sequelize")

// name of the database is database.db
const database = new sequelize({
    dialect: "sqlite",
    storage: __dirname + "/database.db",
})

// notes table for storing notes 
const notes = database.define('notes', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    note: {
        type: sequelize.STRING(1000)
    }
})


// todos table for storing tasks
const todos = database.define("todos", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize.STRING,
        alowNull: false,
    },
    description: {
        type: sequelize.STRING,
    },
    duedate: {
        type: sequelize.DATEONLY,
        alowNull: false,
    },
    priority: {
        type: sequelize.INTEGER,
        defaultValue: 2,
        alowNull: false,
    },
    status: {
        type: sequelize.INTEGER,
        defaultValue: 0
    },
})


// this is hasmany relation for 
todos.hasMany(notes);


// syncing with data
database.sync()
    .then(() => console.log("data base has been synced"))
    .catch((err) => console.log("ther is a problem in syncing the data "))

exports = module.exports = {
    database, todos, notes
}


