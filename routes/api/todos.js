const todos = require('../../database').todos
const notes = require('../../database').notes
const route = require('express').Router()

// api for sort tasks by due date in a desc manner
route.get("/sort/datedesc", function (req, res) {
    todos.findAll({
        include: [{
            model: notes
        }],
        order: [
            ['duedate', 'DESC']
        ]
    })
        .then((todo) => {
            res.status(200).send(todo)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not found any task"
            })
        })

})


// api for sort tasks by due date in a asc manner
route.get("/sort/dateasc", function (req, res) {
    todos.findAll({
        include: [{
            model: notes
        }],
        order: [
            ['duedate', 'ASC']
        ]
    })
        .then((todo) => {
            res.status(200).send(todo)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not found any task"
            })
        })

})

// api for sort tasks by priority
route.get("/sort/priority", function (req, res) {
    todos.findAll({
        include: [{
            model: notes
        }],
        order: [
            ['priority', 'ASC']
        ]
    })
        .then((todo) => {
            res.status(200).send(todo)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not found any task"
            })
        })

})

// api for sort tasks by status
route.get("/sort/status", function (req, res) {
    todos.findAll({
        include: [{
            model: notes
        }],
        order: [
            ['status', 'ASC']
        ]
    })
        .then((todo) => {
            res.status(200).send(todo)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not found any task"
            })
        })

})


// api for getting all data 
route.get("/", function (req, res) {
    todos.findAll({
        include: [{
            model: notes
        }]
    })
        .then((todo) => {
            res.status(200).send(todo)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not found any task"
            })
        })

})


// api for getting data with a specific id
route.get("/:id", function (req, res) {
    todos.findOne({
        where: {
            id: req.params.id
        }
    }).then((task) => {
        res.status(201).send(task)
    }).catch((err) => {
        error: "not able to update"
    })
})


// api for posting tasks to database
route.post("/", function (req, res) {
    todos.create({
        title: req.body.title,
        description: req.body.description,
        duedate: req.body.duedate,
        priority: req.body.priority
    }).then((newtask) => {
        res.status(201).send(newtask)
    }).catch((err) => {
        res.status(501).send({
            error: "could not add new task"
        })
    })
})


// this api is used to update data 
route.post("/:id", function (req, res) {
    todos.findOne({
        where: {
            id: req.params.id
        }
    }).then((task) => {
        task.duedate = req.body.duedate
        task.priority = req.body.priority
        task.status = req.body.status
        task.save()
        res.status(201).send(task)
    }).catch((err) => {
        error: "not able to update"
    })
})


// this api is used to update data
route.patch("/:id", function (req, res) {
    todos.findOne({
        where: {
            id: req.params.id
        }
    }).then((task) => {
        task.duedate = req.body.duedate
        task.priority = req.body.priority
        task.status = req.body.status
        task.save()
        res.status(201).send(task)
    }).catch((err) => {
        error: "not able to update"
    })
})

module.exports = route