
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
        }
        


        return buttonString + `</a></button>`;
        
    }
}