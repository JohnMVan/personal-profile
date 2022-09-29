class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <div class="quick-links">
                <a class="footer-items" href="https://www.github.com/">* GitHub </a>
                <a class="footer-items" href="https://www.bellevue.edu/">* Bellevue University </a>
                <a class="footer-items" href="https://www.youtube.com/">* YouTube Channel</a>
                <a class="footer-items" href="https://www.github.com/">* Course GitHub *</a>
                </div>
            </div>        
        `;
    }
}

customElements.define("footer-component", Footer);