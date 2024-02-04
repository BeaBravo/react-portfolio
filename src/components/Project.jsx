// use onMouseOver for the hover functionality
// onMouseOver opacity to 0.85 and show title, link to github, and technology used
// project will have title, link, technology used, and image 
import { useState } from 'react';
import { BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';
function Project({ title, deployed, link, techUsed, image }) {
    const [hover, setHover] = useState(false);
    const [hoverTitle, setHoverTitle] = useState(false);
    const [hoverIcon, setHoverIcon] = useState(false);
    return (
        <div className={"project col-xs-10 col-sm-8 col-md-5 my-5 col-lg-5"}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ backgroundColor: 'white' }} >
            <img src={image} style={hover ? { position: 'relative', top: 0, bottom: 0, width: '100%', height: '100%', zIndex: -0.5, opacity: '0.2' } :
                { position: 'relative', top: 0, bottom: 0, width: '100%', height: '100%', zIndex: -0.5 }} />
            <span style={hover ? { position: 'absolute', top: '30px', left: '30px' } : { display: 'none' }}>
                <Link
                    className='my-4'
                    to={deployed}
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
                    style={{ color: "#9a275a", fontWeight: "normal" }}>{techUsed}</p>

            </span>
        </div>
    )
}

export default Project;