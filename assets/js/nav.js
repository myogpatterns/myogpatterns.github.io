class Nav extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav id="nav">
            <ul >
                <li class="links"><a href="index.html">Patterns</a></li>
                <li class="links"><a href="zerotohero.html">Getting Started</a></li>
                <li class="links"><a href="fabrics.html">Fabrics</a></li>
                <li class="links"><a href="hardware.html">Hardware</a></li>
                <li class="links"><a href="map.html">MYOG Suppliers</a></li>
                <li class="menu"><a href="javascript:void(0);" class="icon" onclick="navCollapse()">
                    <i class="fa fa-compass fa-2x"></i>
                </a></li>
            </ul>
        </nav>
        `;
    }
}
customElements.define('nav-template', Nav);