import React from 'react';
import InfoBox from '../components/search/InfoBox';
import globalStyles from '../assets/thene/styles';
import HeaderSearch from '../components/HeaderSearch';
import { getWeather } from "../assets/Api";

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      citiesData: []
    };

    this.addCity = this.addCity.bind(this);
    this.removeCity = this.removeCity.bind(this);
  }

  addCity(id) {
    let _self = this;
    let exist = this.state.citiesData.map((city) => city.id).indexOf(id) > -1 ? true : false;

    if (!exist) {
      getWeather(id, function (data) {
        _self.setState({
          citiesData: [..._self.state.citiesData, data]
        });
      });
    }
  }

  removeCity(id) {
    let currentCitiesData = this.state.citiesData;
    let cityToDelete = currentCitiesData.map((city) => city.id).indexOf(id);
    currentCitiesData.splice(cityToDelete, 1);
    this.setState({ citiesData: currentCitiesData });
  }

  renderCity(data) {
    return (
      <div key = {data.id} className = "col-xs-12 col-sm-6 col-md-4 col-lg-4 m-b-15 ">
        <InfoBox
          city = {data.name}
          date = {data.date}
          temperature = {data.temp}
          description = {data.desc}
          humidity = {data.humidity}
          wind = {data.wind + " km/h"}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <HeaderSearch addCity = {this.addCity} removeCity = {this.removeCity} />
        </div>

        <div style={globalStyles.pageWrapper}>
          <h3 style = {globalStyles.navigation}>Application / Search</h3>

          <div className="row">
            {this.state.citiesData.map(this.renderCity, this)}
          </div>
        </div>

      </div>
    );
  }
}

export default SearchPage;
