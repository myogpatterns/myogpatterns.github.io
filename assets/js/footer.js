class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            footer {
                box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.075);
                background-color: var(--primary);
            }

            footer p {
                color: var(--footer-invert);
            }

            footer a {
                color: var(--footer-invert);
                text-decoration:none;
            }
                footer a:hover {
                    color: var(--spotlight);
                }
            
            
            footer.invert p {
                color: #f0f0f0;
            }
            footer.invert a {
                color: #f0f0f0;
            }
                footer.invert a:hover {
                    color: var(--spotlight);
                }
            footer ul {
                margin-bottom: 1rem;
            }
            #sitemap {
                margin:0 0 1rem 0;
            }
        </style>

        <footer class="wrapper style1 invert align-center">    
            <div class="inner">
                    

                    <ul class="icons">
                        <li><a href="https://www.instagram.com/learnmyog/" class="icon brands style1 fa-instagram fa-2x" target="_blank"><span class="label">Instagram</span></a></li>
                        <li><a href="https://www.youtube.com/user/g8trtim" class="icon brands style1 fa-youtube fa-2x" target="_blank"><span class="label">Youtube</span></a></li>
                        <li><a href="https://www.reddit.com/u/g8trtim/" class="icon brands style1 fa-reddit-alien fa-2x" target="_blank"><span class="label">Reddit</span></a></li>
                        <li><a href="https://github.com/myogpatterns/myogpatterns.github.io" class="icon brands style1 fa-github fa-2x" target="_blank"><span class="label">Github</span></a></li>
                    </ul>
                    <section id="sitemap">
                        <a href="/index.html">Home</a> &emsp; 
                        <a href="/fabrics.html">Gear Fabrics</a> &emsp; 
                        <a href="/gallery.html">Maker Gallery</a> &emsp; 
                        <a href="/about.html">About</a> &emsp; 
                        <a href="/about.html#faq">FAQ</a> &emsp; 
                        <a href="/about.html#disclosures">Disclosures</a>  
                    </section>
                    <p>&copy; 2020-2024 LearnMYOG. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-template', Footer);