class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            footer {
                box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.075);
            }
            
        </style>
        <footer class="wrapper style1 align-center">    
            <div class="inner">
                    <article>
                        <!-- Disclosures -->
                        <h3>Transparency and Disclosures</h3>
                        <p>I only recommend products I have used myself, come recommended by trusted friends, and from vendors I have purchased from. All opinions
                            expressed here are my own.
                            </br>This page contains affiliate links. When you buy through affiliate links, at no additional
                            cost to you, I may earn a small commission.
                        </p>
                    </article>

                    <a href="/index.html">Home</a> &emsp; <a href="/fabrics.html">Gear Fabrics</a> &emsp; <a href="/about.html">About</a><br><br>
                    <ul class="icons">
                        <li><a href="https://www.reddit.com/u/g8trtim/" class="icon brands style1 fa-reddit fa-2x" target="_blank"><span class="label">Reddit</span></a></li>
                        <li><a href="https://www.instagram.com/learnmyog/" class="icon brands style1 fa-instagram fa-2x" target="_blank"><span class="label">Instagram</span></a></li>
                        <li><a href="https://www.youtube.com/user/g8trtim" class="icon brands style1 fa-youtube fa-2x" target="_blank"><span class="label">Youtube</span></a></li>
                        <li><a href="https://github.com/myogpatterns/myogpatterns.github.io" class="icon brands style1 fa-github fa-2x" target="_blank"><span class="label">Github</span></a></li>
                    </ul>
                    <p>&copy; 2020 LearnMYOG.com</p>
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-template', Footer);