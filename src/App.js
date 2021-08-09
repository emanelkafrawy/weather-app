import './App.css';
import Form from './components/Form'
import Weather from './components/Weather';
import { Component } from 'react';

// const Api_Key = "2f343523c8dffe56c7d0ff6079a1605e";

const linkk = (city, country)=>{
  return `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=e36ed364400282e43250b6c4c0274d44`
}
class App extends Component {

  state={
    temprature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // console.log(linkk('cairo', 'egypt'));
    const url = linkk(city, country)
    // console.log(url);
    const apiData = await fetch(url)
    const data = await apiData.json() //convert it to json
    console.log(data);
    if(city && country){
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    }
    else{
      this.setState({
        temprature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'please enter Data'
      })
    }
  }

  render(){
    return (
        <div className="App">
        Wheather app
        <Form getWeather ={this.getWeather}/>
        <Weather 
            temprature={this.state.temprature} 
            city= {this.state.city}
            country= {this.state.country}
            humidity= {this.state.humidity}
            description= {this.state.description}
            error= {this.state.error}
        />
      </div>
    );
  }
}

export default App;
