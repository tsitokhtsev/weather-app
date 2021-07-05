import React from 'react'
import Info from './components/info'
import Form from './components/from'
import Weather from './components/weather'

const API_KEY = '1430a4ea3bbc30c64b7240e320ef50ef'

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    cod: undefined,
    error: undefined
  }

  getInfo = async (e) => {
    e.preventDefault()
    var city = e.target.elements.city.value

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_url.json();
      console.log("🚀 ~ file: App.js ~ line 24 ~ App ~ getInfo= ~ data", data)

      if (data.cod === 200) {
        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          cod: data.cod,
          error: undefined
        })
      } else {
        this.setState({
          cod: data.cod,
          error: 'Wrong city name'
        })
      }
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        cod: undefined,
        error: 'Enter city name'
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="top">
          <Info />
          <Form weatherMethod={this.getInfo} />
        </div>
        <div className="bottom">
          <Weather
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            pressure={this.state.pressure}
            cod={this.state.cod}
            error={this.state.error}
          />
        </div>
      </div>
    )
  }
}

export default App