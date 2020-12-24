import React,{useEffect, useState} from "react";

function App() {
    const [city,setCity]=useState('null');
    const [weather,setweather]=useState('null');
    const [wind,setwind]=useState('null');
    const [search,setSearch]=useState('pune');
    useEffect(  ()=>{
        const fetchApi = async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8b202f75161139405a432d8d4f150a1b`;
            const responce=await fetch(url);
            const resjson =await responce.json();
            // console.log(resJson);
            setCity(resjson.main);
            // if (resjson.weather[0]==null) {
              try {
                setweather(resjson.weather[0]);
                setwind(resjson.wind);
              } catch (error) {
                  console.log(error);
              }
             
            // }
        }
        fetchApi();
    },[search])
  return (
    <div className="App">

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
                <input className="form-control me-2" type="search" placeholder="Enter City Name" onChange={ (event)=>{setSearch(event.target.value)}}  aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
    </nav>
    
    <div className="container mt-5">
        <div className="row">
            <div className="col-12 col-sm-8 col-md-6 bg-dark mx-auto weather_card">
                <div className="container-fluid ">
                  {!city ?(
                    <h1>No Data Found</h1>
                  ):(

                  <div>
                    <div className="header py-5">
                        <h1 className="display-6 text-white text-center">{search}</h1>
                        <h4 className=" text-white text-center">{weather.main}</h4>
                        <div className="d-flex text-center py-3 justify-content-center">
                            <i className="fas fa-sun text-white fa-7x px-2"></i>
                            <h1 className="display-4 text-white">{city.temp}°C</h1>
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
                                    <td>{city.humidity}%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Pressure</th>
                                    <td>{city.pressure} mb</td>
                                </tr>
                                  <tr>
                                    <th scope="row">Visibility</th> 
                                    <td>{weather.visibility} km</td>
                                </tr>
                                <tr>
                                    <th scope="row">Wind</th>
                                    <td>{wind.speed} 3 km/h</td>
                                </tr>
                                </tbody>
                              </table>
                        </div>
                    </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
