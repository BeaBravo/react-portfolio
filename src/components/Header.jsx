import { Link, useLocation } from 'react-router-dom'

function Header() {
    //will have nav and title

    // const currentPage = useLocation().pathname;

    return (<header><h1>Beatriz Bravo</h1>
        <ul className='nav'>
            <li className='nav-item'>
                About Me
            </li>
            <li className='nav-item'>
                Portfolio
            </li>
            <li className='nav-item'>
                Contact Me
            </li>
            <li className='nav-item'>
                Resume
            </li>
        </ul>
    </header>
    );
}

export default Header;