import './App.css';

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-md-2 mx-md-2 px-3">
        <div className="container-fluid">
            
            <a className="navbar-brand" href="foo">Weather</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="foo">Home</a>
              </li>
              <li className ="nav-item">
                <a className="nav-link" href="foo">Link</a>
              </li>
            </ul>
            <form className="d-flex ml-auto">
                <input className="form-control me-2" type="search" placeholder="Enter City Name" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
              
          
            
          </div>
        </div>
    </nav>
    );
}

export default Navbar;