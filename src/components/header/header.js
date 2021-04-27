import Home from '../home/index';

function Header() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">

            <section className="container">
                <a href="index.html">
                <img className="logo" src="assets/images/Original.jpeg" alt="logo"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <section className="collapse navbar-collapse" id="navbar">
                <section className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <a className="nav-link" href="index.html">Home</a>
                    <a className="nav-link" href="resume.html">Resume</a>
                    <a className="nav-link" href="portfolio.html">Portfolio</a>
                    <a className="nav-link active" href="contact.html">Contact <span className="sr-only">(current)</span></a>
                </section>
                </section>
            </section>

        </nav>
    );
}

export default Header;