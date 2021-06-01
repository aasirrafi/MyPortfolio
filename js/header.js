let head = document.getElementById("header-section");

window.onload = function () {
  let headerSmall = `
  <nav class="navbar navbar-expand-lg navbar-dark sm-nav fixed-top">
  <a class="navbar-brand" href="home.html"
    ><span class="tag"> < </span> AASIR
    <span>RAFI <span class="tag">/></span></span></a
  >
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div
    class="collapse navbar-collapse"
    style="height: 100vh"
    id="navbarSupportedContent"
  >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="./home.html"
          >Home <span class="sr-only">(current)</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./about.html"
          >About <span class="sr-only">(current)</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./portfolio.html"
          >Portfolio <span class="sr-only">(current)</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./blog.html"
          >Blog <span class="sr-only">(current)</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./contact.html"
          >Contact <span class="sr-only">(current)</span></a
        >
      </li>
    </ul>
  </div>
</nav>`;

  head.innerHTML = headerSmall;

  //desktop sidebar

  let sidebar = document.querySelector(".sidebar-nav");

  let sidebarshow = `          
  <!-- sidebar for desktop -->

  <div class="main ml-auto h-100">
    <ul class="ml-auto">
      <li>
        <a href="./home.html">
          <div class="icon ml-auto">
            <p class="my-auto"><span>home</span></p>
            <i class="fa fa-home"></i>
          </div>
        </a>
      </li>
      <li>
        <a href="./about.html">
          <div class="icon ml-auto">
            <p class="my-auto"><span>About</span></p>
            <i class="fas fa-user"></i>
          </div>
        </a>
      </li>
      <li>
        <a href="./portfolio.html">
          <div class="icon ml-auto">
            <p class="my-auto"><span>Portfolio</span></p>
            <i class="fa fa-briefcase"></i>
          </div>
        </a>
      </li>
      <li>
        <a href="./blog.html">
          <div class="icon ml-auto">
            <p class="my-auto"><span>Blog</span></p>
            <i class="fa fa-envelope-open"></i>
          </div>
        </a>
      </li>

      <li>
        <a href="./contact.html">
          <div class="icon ml-auto">
            <p class="my-auto"><span>Contact</span></p>
            <i class="mx-auto fa fa-home"></i>
          </div>
        </a>
      </li>
    </ul>
  </div>

  <!-- sidebar for desktop end-->`;

  sidebar.innerHTML = sidebarshow;
};
