// use onMouseOver for the hover functionality
// onMouseOver opacity to 0.85 and show title, link to github, and technology used
// project will have title, link, technology used, and image 
import { useState } from 'react';
import { BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';
function Project({ functionality, title, link, techUsed, image }) {
    const [hover, setHover] = useState(false);
    const [hoverTitle, setHoverTitle] = useState(false);
    const [hoverIcon, setHoverIcon] = useState(false);
    return (
        <div className={hover ? "project col-xs-10 col-sm-8 col-md-5 my-5 col-lg-5 p-3 opacity-75 border-5" : "project col-xs-10 col-sm-8 col-md-5 my-5 col-lg-5 p-3"}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ backgroundImage: `url(${image})`, backgroundSize: "100% 100%", minHeight: "250px", height: "auto" }} >
            <span style={hover ? {} : { display: 'none' }}>
                <Link
                    className='my-4'
                    to={link}
                    target='_blank'
                    style={hoverTitle ? { textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "larger", opacity: '1' } :
                        { textDecoration: "none", color: "#9a275a", fontWeight: "bold", fontSize: "larger", opacity: '1' }}
                    onMouseEnter={() => setHoverTitle(true)}
                    onMouseLeave={() => setHoverTitle(false)}>
                    {title}
                </Link>
                <Link
                    className='mx-3 mb-2'
                    to={link}
                    target='_blank'
                    style={{ textDecoration: "none" }}><BsGithub style={hoverIcon ? { color: "black", marginBottom: "1rem", fontSize: "larger" } :
                        { color: "#9a275a", marginBottom: "1rem", fontSize: "larger" }}
                        onMouseEnter={() => setHoverIcon(true)}
                        onMouseLeave={() => setHoverIcon(false)} />
                </Link>
                <p className='my-4'
                    style={{ color: "#9a275a", fontWeight: "lighter" }}>{techUsed}</p>

            </span>
        </div>
    )
}

export default Project;