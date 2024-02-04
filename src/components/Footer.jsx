import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
    return (<footer>
        <Link className="mx-4"
            to='https://www.github.com/BeaBravo'
        >
            <BsGithub />
        </Link>
        <t />
        <Link
            to='https://www.linkedin.com/in/beatriz-bravo/'
        >
            <BsLinkedin />
        </Link>
    </footer>
    );
}