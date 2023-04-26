// All common page elements/reusable components are held here



// Main Favicon
class Main_Favicon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="assets/icons/terminal-icon.png"
      />
    `;
  }
}

// Projects Favicon
class Projects_Favicon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../assets/icons/terminal-icon.png"
      />
    `;
  }
}

// Top level Header/Navbar
/*
+++++ excess pages place here +++++
<li><a href="skills.html" class="nav-link">Skills</a></li>
<li><a href="experience.html" class="nav-link">Experience</a></li>
<li><a href="contact.html" class="nav-link">Contact</a></li>
*/
class Main_Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>            
          <h1><a href="index.html">WILLIAM BUSHIE</a></h1>
          <ul class="navigation">
            <li><a href="index.html" class="nav-link">About</a></li>
            <li><a href="projects/all.html" class="nav-link">Projects</a></li>
          </ul>
          <button class="burger-menu" id="burger-menu">
            <ion-icon class="bars" name="menu-outline"></ion-icon>
          </button>
        </nav>
      `;
    }
  }

// Second Level Header/Navbar (for projects pages)
/*
+++++ skills and experience pages here +++++
<li><a href="../skills.html" class="nav-link">Skills</a></li>
<li><a href="../experience.html" class="nav-link">Experience</a></li>
<li><a href="../contact.html" class="nav-link">Contact</a></li>
*/
class Projects_Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>            
        <h1><a href="../index.html">WILLIAM BUSHIE</a></h1>
        <ul class="navigation">
          <li><a href="../index.html" class="nav-link">About</a></li>
          <li><a href="all.html" class="nav-link">Projects</a></li>
        </ul>
        <button class="burger-menu" id="burger-menu">
          <ion-icon class="bars" name="menu-outline"></ion-icon>
        </button>
      </nav>
    `;
  }
}

// Main Footer
class Main_Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          <footer>
            <p class="copy">&copy; Copyright 2023</p>
            <p class="copy">
              Built with &#128153; by William Bushie
            </p>
            <p>
              Send me an <a href="mailto:willbushie@gmail.com">Email</a>
            </p>
          </footer>
        `;
    }
}

// declare comomon page components (to be called within the html)
customElements.define('main-favicon',Main_Favicon);
customElements.define('project-favicon',Projects_Favicon);
customElements.define('main-header',Main_Header);
customElements.define('projects-header',Projects_Header);
customElements.define('main-footer',Main_Footer);
