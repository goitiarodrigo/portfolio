const Project = require("../models/Project")

const projectControllers = {
    getAllProjects: async(req, res)=>{
        try{
            const allProjects = await Project.find()
            res.json({success: true, response: allProjects})
        }catch(e){
            res.json({success: false, response: e})
        }
    },

    newProject: async(req, res)=> {
        const {name, description, photo, link, languages, gitCode} = req.body

        const newProject = new Project({
            name,
            description,
            photo,
            link,
            languages,
            gitCode
        })
        try{
            newProject.save()
            res.json({success: true, response: newProject})
        }catch(e){
            res.json({success: false, response: e})
        }
        
        
    }
}

module.exports = projectControllers