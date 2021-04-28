import Headshot from './images/Headshot.jpg';

function Home() {
    return(
        <main className="container">

            <section>
            <section className="row">
                <section className="col-md-6">
                <figure>
                    <img className="headshot" src={Headshot} alt="Personal Headshot"></img>
                </figure>
                </section>
                <section className="col-md-6">
                <h1>Hello, my name is Alex Strickland!</h1>
                <p>I am a current student at The Coding Boot Camp at UNC Chapel Hill for full stack web development. I have a Bachelor's of Science degree in Business Administration with a concentration in Finance from NC State University. After working in the Insurance industry for 2 years, I decided to make the change into Web Development and Design. Please feel free to visit any of the links below or contact me for more information!</p>
                <p className="links">
                    <a href="mailto:alexhstrickland@gmail.com" className="far fa-envelope">EMAIL</a>
                    <a href="https://www.linkedin.com/in/alexandrastrickland/" className="fab fa-linkedin-in">LINKEDIN</a>
                    <a href="https://github.com/alexhstrickland" className="fab fa-github">GITHUB</a>
                </p>
                </section>
            </section>
            </section>
        </main>
    );
}

export default Home;