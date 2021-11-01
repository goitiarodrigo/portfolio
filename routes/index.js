const express = require("express")
const projectControllers = require("../controllers/projectsControllers")

const router = express.Router()

router.route("/projects")
    .get(projectControllers.getAllProjects)

router.route("/newproject")
    .post(projectControllers.newProject)

module.exports = router