class Header extends HTMLElement 
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="header">
                <div id="banner">
                    <h1></h1>
                </div>

                <div i="nav-container">
                <button><a class="navlinks" id="home-button" href="./index.html">Home</a></button>
                <button><a class="navlinks" id="about-button" href="./about.html">About</a></button>
                <button><a class="navlinks" id="resume-button" href="./resume.html">Resume</a></button>
                <button><a class="navlinks" id="projects-button" href="./projects.html">Projects</a></button>
                <button><a class="navlinks" id="diagrams-button" href="./database.html">Database Diagrams</a></button>
                <button><a class="navlinks" id="testing-button" href="./api-test.html">API Unit Testing</a></button>
                <button><a class="navlinks" id="bucket-button" href="./bucket-list.html">Bucket List</a></button>
                <button><a class="navlinks" id="presentation-button" href="././web-430/vanhessche-tech-value-stream.html">Presentations</a></button>
                </div> 

            </div>
        `;
    }
}

customElements.define("header-component", Header);