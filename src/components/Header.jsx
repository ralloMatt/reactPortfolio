

function Header({ currentPage, handlePageChange }) {

    return (
        <header>
        <h1>Matthew Rallo</h1>
        <nav class="navbar">
            <ul>
                <li>
                    <a 
                        href="#AboutMe" 
                        onClick={() => handlePageChange('AboutMe')}
                        className={currentPage === 'AboutMe' ? 'activeLink' : ''}
                    >
                        About Me
                    </a>
                </li>
                <li>
                    <a 
                        href="#Portfolio" 
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'activeLink' : ''}
                    >
                        Portfolio
                    </a>
                </li>
                <li>
                    <a 
                        href="#Contact" 
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'activeLink' : ''}
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a 
                        href="#Resume" 
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'activeLink' : ''}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    );


}

export default Header;
