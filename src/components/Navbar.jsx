import '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark p-4 border-bottom">
            <div className="container">
                <a className="navbar-brand fs-3 fw-bold text-light" href="#">Shajai</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
