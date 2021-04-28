import "./style.css";
import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">

            <section className="container">
                <a href="index.html">
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <section className="collapse navbar-collapse" id="navbar">
                <section className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/Portfolio">Portfolio</Link>
                    <Link className="link" to="/Contact">Contact</Link>
                </section>
                </section>
            </section>

        </nav>
    );
}

export default Header;