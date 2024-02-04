// use onMouseOver for the hover functionality
// onMouseOver opacity to 0.85 and show title, link to github, and technology used
// project will have title, link, technology used, and image 
import { useState } from 'react';
function Project({ functionality, title, link, techUsed, image }) {
    const [hover, setHover] = useState(false);
    return (
        <div className={hover ? "project col-xs-10 col-sm-8 col-md-5 my-5 col-lg-5 p-3 opacity-50" : "project col-xs-10 col-sm-8 col-md-5 my-5 col-lg-5 p-3"}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ backgroundImage: `url(${image})`, backgroundSize: "100% 100%", minHeight: "250px", height: "auto" }} >
            <span style={hover ? {} : { display: 'none' }}>
                <h3 className='my-0' style={{ color: "black", fontWeight: "bold" }}>{title}
                    <a className='mx-4' href={link} target='_blank' style={{ textDecoration: "none" }}>🔗</a>
                </h3>
                <p>{techUsed}</p>

            </span>
        </div>
    )
}

export default Project;