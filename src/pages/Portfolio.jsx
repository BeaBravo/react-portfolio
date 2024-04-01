import { useState } from "react";
import projectList from "../assets/projects";
import Project from '../components/Project'


function Portfolio() {
    const [filteredProjects, setFilteredProjects] = useState(projectList);
    const [isChecked, setCheckbox] = useState(false)

    //get all tech used and remove duplicates
    const allTech = projectList.map((project) => project.techUsed.split(', '))
    let allTechArray = [];
    allTech.map((array1) => allTechArray.push(...array1))
    allTechArray = allTechArray.filter((item, index) => allTechArray.indexOf(item) === index);
    console.log(allTechArray);

    // handle filters 
    const handleFilter = (event) => {
        const name = event.target.name;
        const filtered = projectList.filter(project => project.techUsed.includes(name));
        !isChecked ? setFilteredProjects(filtered) : setFilteredProjects(projectList);
    }
    return (
        <div id='portfolio'>
            <h1>Portfolio</h1>
            <aside>
                <div>
                    <h5>Filter by tech used</h5>
                </div>
                <div className="filter-checkbox-container">
                    <input type='checkbox' name='React' onClick={handleFilter} onChange={() => { setCheckbox(!isChecked) }} />
                    {console.log('isChecked?', isChecked)}
                    <label htmlFor="React">React</label>

                </div>
            </aside>
            <section className="projects row justify-content-evenly">
                <h2 className="text-align-left">Group Projects</h2>
                {filteredProjects.map((project) => <Project key={project.id} {...project} />)}
            </section>
        </div>
    );
}

export default Portfolio;