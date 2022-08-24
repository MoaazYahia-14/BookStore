import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (<>
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand px-2 font-semibold" to='./home'>Book Store</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/home'>About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/home'>Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/home'>Contact</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/'>
                        Exit
                        <i className="mx-2 fa-solid fa-arrow-right-from-bracket fa-xl"></i>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
    )
}
