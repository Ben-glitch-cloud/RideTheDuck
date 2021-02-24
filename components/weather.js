import React from 'react'
import { Text, Image,  View } from 'react-native'
import axios from 'axios';


const weather = require('../style/weather');

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: '',
      weather: '',
      icon: '',
      cityName: 'London',
      min: '',
      max: '',
      feelsLike: '',
      alphaCode: "GB",
      message: ""
      
    }
    this.handleSubmit(this.props.cityName)
    this.searchApiAdv(this.props.alphaCode)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cityName !== this.props.cityName) {
      this.setState({
        cityName: this.props.cityName,
        alphaCode: this.props.alphaCode
      })
      this.handleSubmit(this.props.cityName)
      this.searchApiAdv(this.props.alphaCode)
    }
  }
  
  handleSubmit = (cityName) => {
    const apiKey = '9ec9591a31e3be7446a43513c920d793'
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    .then(res => {
      this.setState( {
        temp: res.data.main.temp,
        weather: res.data.weather[0].main,
        icon: res.data.weather[0].icon,
        min: res.data.main.temp_min,
        max: res.data.main.temp_max,
        feelsLike: res.data.main.feels_like,
      })
    })
  }
  searchApiAdv = (alphaCode) => {
    try {
      fetch(`https://www.travel-advisory.info/api?countrycode=${this.props.alphaCode}`)
        
        .then(response => 
          response.json().then(data => ({
            data: data,
            status: response.status
          })).then(res => {
            let messg = res.data.data[`${this.props.alphaCode}`]
            this.setState({
              message: messg.advisory.message
            })
            console.log("message",res.data.data.GB.advisory.message)
          }));
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  render() {
    return(
      <View style={weather.container} >
         <Text>{this.state.message}</Text>
            <Text style={weather.degrees}>{this.state.temp}°C</Text>
            <View style={weather.image} >
              <Image style = { weather.icon }
                source = {
                  {
                    width: 80,
                    height: 80,
                    uri: `http://openweathermap.org/img/w/${this.state.icon}.png`
                  }
                }
                />
            <Text style={weather.state}>{this.state.weather}</Text>
            </View>
            <View style={weather.condition}>
                <Text style={weather.text}>Min: {this.state.min}°C</Text>
                <Text style={weather.text}>Max: {this.state.max}°C</Text>
            </View>
            <Text style={weather.text}>Feels like: {this.state.feelsLike}°C</Text>
      </View>
    )
  }
};


