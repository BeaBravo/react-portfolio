import { useState } from "react";
import projectList from "../assets/projects";
import Project from '../components/Project';
import TechCheckbox from "../components/techCheckbox";


function Portfolio() {
    const [filteredProjects, setFilteredProjects] = useState(projectList);
    const [isChecked, setCheckbox] = useState(false)
    const [filterName, setFilterName] = useState([])

    //get all tech used and remove duplicates
    const allTech = projectList.map((project) => project.techUsed.split(', '))
    let allTechArray = [];
    allTech.map((array1) => allTechArray.push(...array1))
    allTechArray = allTechArray.filter((item, index) => allTechArray.indexOf(item) === index);
    // console.log(allTechArray);

    // handle filters 
    const handleFilter = (event) => {
        const name = event.target.name;
        console.log('box is checked', event.target.checked)
        // if the checkbox has been checked, it will add the tech to the array, if it has been unchecked - it will delete it 
        if (event.target.checked) {
            setFilterName([...filterName, name])
        }
        else {
            filterName.splice(filterName.indexOf(name), 1);
            setFilterName([...filterName]);
        }

        // const filtered = projectList.filter(project => project.techUsed.includes(name));
        // !isChecked ? setFilteredProjects(filtered) : setFilteredProjects(projectList);
    }



    return (
        <div id='portfolio'>
            <h1>Portfolio</h1>
            <aside>
                <div>
                    <h5>Filter by tech used</h5>
                </div>
                {allTechArray.map((tech) => {
                    return (
                        <>
                            <TechCheckbox key={tech} id={tech} name={tech} onClick={handleFilter} onChange={() => { setCheckbox(!isChecked) }} />
                        </>
                    )
                })}
                {console.log(filterName)}
            </aside>
            <section className="projects row justify-content-evenly">
                <h2 className="text-align-left">Group Projects</h2>
                {filteredProjects.map((project) => <Project key={project.id} {...project} />)}
            </section>
        </div>
    );
}

export default Portfolio;