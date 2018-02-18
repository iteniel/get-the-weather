import React, { PropTypes } from 'react';
import globalStyles from '../assets/thene/styles';
import HeaderPages from '../components/HeaderPages';
import { getDetailedWeather, getForecast } from '../assets/Api';
import DetailedWeatherList from '../components/forecast/DetailedWeatherList';
import ForecastWeather from '../components/forecast/ForecastWeather';
import TemperatureChart from '../components/forecast/TemperatureChart';
import HumidityChart from '../components/forecast/HumidityChart';
import WindChart from '../components/forecast/WindChart';

class ForecastPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cityId: this.props.params.id,
      cityName: "",
      details: {},
      forecast: {}
    };
  }

  componentWillMount() {
    this.getDetailedWeatherData(this.state.cityId);
    this.getForecastData(this.state.cityId);
  }

  getForecastData(id) {
    let _self = this;    
    getForecast(id, function (data) {      
      _self.setState({
        forecast: data
      });
    });
  }

  getDetailedWeatherData(id) {
    let _self = this;    
    getDetailedWeather(id, function (data) {      
      _self.setState({
        details: data,
        cityName: data.name
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <HeaderPages title= {"Five day forecast " + this.state.cityName} />
        </div>
        <div style={globalStyles.pageWrapper}>
          <h3 style={globalStyles.navigation}>Application / Five day forecast {this.state.cityName}</h3>
        
          {Object.keys(this.state.details).length> 0 &&
            <div>
              <DetailedWeatherList data = {this.state.details} />
            </div>
          }
          {Object.keys(this.state.forecast).length> 0 &&
            <div>
              <div className = "row">
                <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12  m-b-15"> 
                  <ForecastWeather data = {this.state.forecast.weather} />
                </div>
              </div>
              <div className = "row">
                <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md m-b-15">
                  <TemperatureChart data = {this.state.forecast.temperature} />
                </div>
              </div>
              <div className = "row">
                <div className = "col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
                  <HumidityChart data = {this.state.forecast.humidity}/>
                </div>
                <div className = "col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
                  <WindChart data = {this.state.forecast.wind}/>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

ForecastPage.propTypes = {
  params: PropTypes.object
};

export default ForecastPage;