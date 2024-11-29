const Task = require('../models/Task')

const createTask = async (req, res) => {
    const { title, status, estimatedTime, category, priority } = req.body
    
    try {
        const newTask = new Task({ title, status, estimatedTime, category, priority })
        const task = await newTask.save()
        res.status(201).json(task)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

module.exports = { createTask }