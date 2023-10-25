export function initHeader(div) {
  const user_is_loggedin = localStorage.getItem('loggedin_user')
  let links = ''
  let user = 'Guest'

  if(user_is_loggedin == null) {
    links = `
      <li><a class="dropdown-item" href="login.html">Login</a></li>
      <li><a class="dropdown-item" href="register.html">Register</a></li>
    `
  } else {
    user = user_is_loggedin
    links = `
      <li><a class="dropdown-item" href="dashboard.html">Dashboard</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" id="logout" href="#">Logout</a></li>
    `
  }

      div.innerHTML = `
      <nav class="navbar  navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html"><svg height="48" viewBox="0 0 17 48" width="17" xmlns="https://www.w3.org/2000/svg"><path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"></path></svg></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto me-5">
              <li class="nav-item">
                  <a class="nav-link text-dark" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link text-dark" href="#products">Products</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link text-dark" href="accessories.html">Accessories</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ${user}
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="weather.html">Weather</a></li>
                  ${links}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        `
}