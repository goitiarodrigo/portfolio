import {useEffect, useState} from "react"
import axios from "axios"
import Header from "../components/Header"
import MyWorks from "../components/Myworks"
import About from "../components/About"
import Footer from "../components/Footer"


const Home = () => {

    const [projects, setProjects] = useState([])

    useEffect(()=> {
        const getProjects = async () => {
            const response = await axios.get("https://portfolio-goitia.onrender.com/api/projects")
            setProjects(response.data.response)
        }
        getProjects()
    }, [])

    return (
        <>
            <Header />
            <h1 id="myWorks" className="titleWorks">Mis trabajos</h1>
            <div className="containerAllWorks" >
                
                {projects.map(project => {
                return <MyWorks key={project._id} project={project} />
                })}
            </div>
            <About />
            <Footer />
        </>
    )
}

export default Home