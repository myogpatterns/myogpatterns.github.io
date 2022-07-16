class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="banner style4 image-position-right onload-content-fade-right">
                <div class="content">
                    <a href="/index.html" class="logo">Learn MYOG</a>
                </div>
                <!-- <div class="image">
                    <img src="/images/banner4.jpg" alt="vintage sewing machine Photo by Jake Yoon on Unsplash" /> 
                </div> -->
            </section>
        `;
    }
}
customElements.define('header-template', Header);