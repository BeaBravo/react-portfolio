// use onMouseOver for the hover functionality
// onMouseOver opacity to 0.85 and show title, link to github, and technology used
// project will have title, link, technology used, and image 


function Project({ functionality, title, link, techUsed, image }) {
    return (
        <div className="project col-xs-10 col-sm-8 col-md-5 my-5 col-lg-5 p-0" >
            <img src={image} alt={title + "background image"} style={{ width: '100%' }} />
        </div>
    )
}

export default Project;