
export class Button {
    constructor() {
     
    }

    changeButton(page) {
        
        let buttonString = 
            `<button><a 
            class="navlinks" 
            id="${page}" 
            style="background-color: aqua; color: black;"`
        
        if(page==="about-button") {
            buttonString += `href="./about.html">About`
        } else if(page==="bucket-button") {
            buttonString += `href="./bucket-list.html">Bucket List`
        } else if(page==="testing-button") {
            buttonString += `href="./api-test.html">API Unit Testing`
        } else if(page==="diagrams-button") {
            buttonString += `href="./database.html">Database Diagrams`
        } else if(page==="resume-button") {
            buttonString += `href="./resume.html">Resume`
        } else if(page==="projects-button") {
            buttonString += `href="./projects.html">Projects`
        } else if(page==="presentation-button") {
            buttonString += `href="././web-430/vanhessche-tech-value-stream.html">Presentations`
        }
        

        return buttonString + `</a></button>`;
        
    }
}
