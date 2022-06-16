import styles from '../componentCSS/Header.module.css';

function Header() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'white'}}>
            <div className="container-fluid">
              <a className="navbar-brand" href="#" style={{borderRight: '0.5px solid', borderColor: '#D0C9C0'}}>
                <img className={styles.logoImg} src="https://media-exp1.licdn.com/dms/image/C510BAQEIUanjf8LZTw/company-logo_200_200/0/1568873422485?e=2147483647&v=beta&t=R3172P0OnuGor7tI_AdEJOJpPNUc-kB7_lH4jBGynFo" alt="Logo" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className='navbar-nav'>
                  <li className='nav-item dropdown'>
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" style={{margin: '0 20px 0 0', borderRight: '0.5px solid', borderColor: '#D0C9C0'}}>
                     MY APPLICATION
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                  <li className='nav-item dropdown'>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" style={{margin: '0 20px 0 0', borderLeft: '0.5px solid', borderColor: '#D0C9C0'}}>
                    <img className={styles.profileImg} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7H_J3UUxzlmEYMkmmks1Emd_8i3EJFGENA&usqp=CAU' alt="Profile-pic" />
                      Barde Ridel
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <hr style={{marginTop: '0'}}/>
        </div>
    )
}

export default Header;