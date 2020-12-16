import './App.css';
function App() {
  return (
    <div className="App">

    <div className="container mt-5">
        <div className="row">
            <div className="col-12 col-sm-8 col-md-6 bg-dark mx-auto weather_card">
                <div className="container-fluid ">
                    <div className="header py-5">
                        <h1 className="display-6 text-white text-center">Bilimora, Gujarat</h1>
                        <h4 className=" text-white text-center">Haze Sunshine</h4>
                        <div className="d-flex text-center py-3 justify-content-center">
                            <i className="fas fa-sun text-white fa-7x px-2"></i>
                            <h1 className="display-4 text-white">28°C</h1>
                        </div>
                    </div>
                    <div className="foot py-4">
                        <div className="foo_head">
                            <h4 className="text-center">Wednesday, 12:00 PM</h4>
                        </div>
                        <div className="foot_body table-responsive">
                            <table className="table  text-center mt-2">
                                <tbody>
                                  <tr>
                                    <th scope="row">Humidity</th>
                                    <td>63%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Pressure</th>
                                    <td>1015 mb</td>
                                </tr>
                                  <tr>
                                    <th scope="row">Visibility</th> 
                                    <td>1.6 km</td>
                                </tr>
                                <tr>
                                    <th scope="row">Wind</th>
                                    <td>ENE 3 km/h</td>
                                </tr>
                                </tbody>
                              </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
