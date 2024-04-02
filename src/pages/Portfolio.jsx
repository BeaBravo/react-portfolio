import { useEffect, useState } from "react";
import projectList from "../assets/projects";
import Project from '../components/Project';
import TechCheckbox from "../components/techCheckbox";


function Portfolio() {
    const [projectsToRender, setProjectsToRender] = useState(projectList);
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
        // console.log('box is checked', event.target.checked)
        // if the checkbox has been checked, it will add the tech to the array, if it has been unchecked - it will delete it 
        if (event.target.checked) {
            setFilterName([...filterName, name])
        }
        else {
            filterName.splice(filterName.indexOf(name), 1);
            setFilterName([...filterName]);
        }


    }
    // will update the projects to render as the boxes are checked or unchecked 
    useEffect(() => {
        // will return true if the value is included in the array 
        const includesTech = (arr, values) => values.some(v => arr.includes(v));

        // will return the projects with the checked tech only
        const filtered = projectList.filter(project => includesTech(project.techUsed, filterName));
        // if no filters are checked it will render all projects 
        filterName.length > 0 ? setProjectsToRender(filtered) : setProjectsToRender(projectList);
    }, [filterName])



    return (
        <div id='portfolio'>
            <h1>Portfolio</h1>
            <section id='filter-projects'>
                <div>
                    <h5 style={{ fontWeight: 'bold' }}>Filter Projects by tech used</h5>
                </div>
                <div id='checkboxes-filter'>
                    {allTechArray.map((tech) => {
                        return (
                            <>
                                <TechCheckbox key={tech} id={tech} name={tech} onClick={handleFilter} />
                            </>
                        )
                    })}
                </div>
            </section>
            <section className="projects row justify-content-evenly">
                {projectsToRender.map((project) => <Project key={project.id} {...project} />)}
            </section>
        </div>
    );
}

export default Portfolio;