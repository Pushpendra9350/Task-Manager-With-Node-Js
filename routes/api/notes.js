const notes = require('../../database').notes
const route = require('express').Router()


// api to gets notes with a specific id
route.get("/:id/notes", function (req, res) {
    notes.findAll({
        where: { todoId: req.params.id }
    })
        .then((notes) => {
            res.status(200).send(notes)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not found any task"
            })
        })

})


// api to post the notes 
route.post("/:id/notes", function (req, res) {
    notes.create({
        note: req.body.note,
        todoId: req.params.id
    }).then((newtask) => {
        res.status(201).send(newtask)
    }).catch((err) => {
        res.status(501).send({
            error: "could not add new task"
        })
    })
})

module.exports = route