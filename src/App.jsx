import './App.css';
import lantern from './lantern.png';

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a
            href={window.location.href.split('/')[2]}
            className='navbar navbar-light bg-light'
          >
            <img src={lantern} className='h-10 w-10 ml-3 mr-5' alt='logo' />
            Lantern Festival
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end'
            tabIndex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
          >
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                Offcanvas
              </h5>
              <button
                type='button'
                className='btn-close text-reset'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body w-full'>
              <ul className='navbar-nav justify-center gap-10 flex-grow-1'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='https://google.com'
                  >
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='https://google.com'>
                    Link
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    id='offcanvasNavbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                    href='https://google.com'
                  >
                    Dropdown
                  </a>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='offcanvasNavbarDropdown'
                  >
                    <li>
                      <a className='dropdown-item' href='https://google.com'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='https://google.com'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <a className='dropdown-item' href='https://google.com'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
