const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type: String, required: true},
    link: {type: String},
    languages: {type: Array},
    gitCode: {type: String}
})

const Project = mongoose.model("project", ProjectSchema)

module.exports = Project