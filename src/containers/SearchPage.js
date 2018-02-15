import React from 'react';
// import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import InfoBox from '../components/search/InfoBox';
import globalStyles from '../assets/thene/styles';

const SearchPage = () => {

  return (
    <div>
      <h3 style = {globalStyles.navigation}>Application / Search</h3>

      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 m-b-15 ">
          <InfoBox
            city="London"
            date="Feb 4"
            temperature="1"
            description="cloudy"
            humidity="50%"
            wind="12 km/h"
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 m-b-15 ">
          <InfoBox
            city="Paris"
            date="Feb 4"
            temperature="2"
            description="cloudy"
            humidity="50%"
            wind="12 km/h"
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 m-b-15 ">
          <InfoBox
            city="Los Angeles"
            date="Feb 4"
            temperature="24"
            description="cloudy"
            humidity="50%"
            wind="12 km/h"
          />
        </div>
      </div>

    </div>
  );
};

export default SearchPage;
