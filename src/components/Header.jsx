import { Link, useLocation } from 'react-router-dom'

function Header() {
    //will have nav and title

    const currentPage = useLocation().pathname;

    return (<header><h1>Beatriz Bravo</h1>
        <ul className='nav'>
            <li className='nav-item'>
                <Link
                    to='/'>
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Portfolio'>
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Contact'>
                    Contact Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Resume'>
                    Resume
                </Link>
            </li>
        </ul>
    </header>
    );
}

export default Header;