import projectList from "../assets/projects";
import Project from '../components/Project'


function Portfolio() {

    return (
        <div id='portfolio'>
            <h1>Portfolio</h1>
            <section className="projects row justify-content-evenly">
                {projectList.map((project) => <Project title={project.title} image={project.image} link={project.link} techUsed={project.techUse} />)}
            </section>
        </div>
    );
}

export default Portfolio;