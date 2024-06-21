import React from 'react'

function Navbar() {
    return (
        <nav className=" navsbar navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold text-primary-emphasis" href="/">NewsBreak</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" hoverLink navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active fw-semibold" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="/business">Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="/entertainment">Entertainment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="/health">Health</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="/general">General</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="/sports">Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="/technology">Technology</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
