// All common page elements/reusable components are held here

// Top level Header/Navbar
class Main_Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>            
          <h1><a href="index.html">WILLIAM BUSHIE</a></h1>
          <ul class="navigation">
            <li><a href="index.html" class="nav-link">About</a></li>
            <li><a href="skills.html" class="nav-link">Skills</a></li>
            <li><a href="experience.html" class="nav-link">Experience</a></li>
            <li><a href="projects/projects.html" class="nav-link">Projects</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
          </ul>
          <button class="burger-menu" id="burger-menu">
            <ion-icon class="bars" name="menu-outline"></ion-icon>
          </button>
        </nav>
      `;
    }
  }

// Second Level Header/Navbar (for projects pages)
class Projects_Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>            
        <h1><a href="../index.html">WILLIAM BUSHIE</a></h1>
        <ul class="navigation">
          <li><a href="../index.html" class="nav-link">About</a></li>
          <li><a href="../skills.html" class="nav-link">Skills</a></li>
          <li><a href="../experience.html" class="nav-link">Experience</a></li>
          <li><a href="projects/projects.html" class="nav-link">Projects</a></li>
          <li><a href="../contact.html" class="nav-link">Contact</a></li>
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
        </footer>
        `;
    }
}

// declare comomon page components (to be called within the html)
customElements.define('main-header',Main_Header);
customElements.define('projects-header',Projects_Header);
customElements.define('main-footer',Main_Footer);
