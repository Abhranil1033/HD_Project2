import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container" >
                <a className="navbar-brand" href="#">FlatHunt</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ marginRight: '20 px' }}></span>
                </button>
                {/* menu start */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Search Flats</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Search Flats</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Search FlatMates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">List Property</a>
                        </li>
                        <div>
                            <button type="button" className="btn btn-secondary mx-5">Sign Up</button>
                        </div>
                        <div className="form-check form-switch ms-5">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </ul>
                </div>
                {/* menu end */}
            </div>
        </nav>
    </div>
  )
}

export default Navbar