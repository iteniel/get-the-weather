import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { white, orange500, grey800, red500, blue500, green500 } from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Info from 'material-ui/svg-icons/action/info-outline';
import Temperature from 'material-ui/svg-icons/action/trending-flat';
import TemperatureMaximun from 'material-ui/svg-icons/action/trending-up';
import TemperatureMinimum from 'material-ui/svg-icons/action/trending-down';

const DetailedWeatherList = (props) => {

  const styles = {
    subheader: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      backgroundColor: orange500,
      color: white
    },
    content: {
      padding: '5px 10px',
      marginLeft: 90,
      height: 80
    },
    number: {
      display: 'block',
      fontWeight: typography.fontWeightMedium,
      fontSize: 18,
      color: grey800
    },
    text: {
      fontSize: 20,
      fontWeight: typography.fontWeightLight,
      color: grey800
    },
    iconSpanMin: {
      float: 'left',
      height: 90,
      width: 90,
      textAlign: 'center',
      backgroundColor: blue500
    },
    iconSpan: {
      float: 'left',
      height: 90,
      width: 90,
      textAlign: 'center',
      backgroundColor: green500
    },
    iconSpanMax: {
      float: 'left',
      height: 90,
      width: 90,
      textAlign: 'center',
      backgroundColor: red500
    },
    icon: {
      height: 48,
      width: 48,
      marginTop: 20,
      maxWidth: '100%'
    }
  };

  return (
    <div className = "row  m-b-15">
      <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">  
            <Paper>
              <span style = {styles.iconSpanMax}>
                <TemperatureMaximun 
                  color = {white}
                  style = {styles.icon}
                />
              </span>

              <div style = {styles.content}>
                <span style = {styles.text}>Temperature Max</span>
                <span style = {styles.number}>{props.data.tempMax} <sup>&deg;C</sup></span>
              </div>
            </Paper>
          </div>
          <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">  
            <Paper>
              <span style = {styles.iconSpan}>
                <Temperature 
                  color = {white}
                  style = {styles.icon}
                />
              </span>

              <div style = {styles.content}>
                <span style = {styles.text}>Temperature</span>
                <span style = {styles.number}>{props.data.temp} <sup>&deg;C</sup></span>
              </div>
            </Paper>
          </div>
          <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">  
            <Paper>
              <span style = {styles.iconSpanMin}>
                <TemperatureMinimum 
                  color = {white}
                  style = {styles.icon}
                />
              </span>

              <div style = {styles.content}>
                <span style = {styles.text}>Temperature</span>
                <span style = {styles.number}>{props.data.tempMin} <sup>&deg;C</sup></span>
              </div>
            </Paper>
          </div>
      </div>
      <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <Paper>
          <List>
            <Subheader style ={styles.subheader}>Details</Subheader>
                <ListItem
                  leftAvatar = {<Avatar icon = {<Info />} />}
                  primaryText = {props.data.descShort}
                  secondaryText = {props.data.descLong}
                />
                <Divider inset={true} />
                <ListItem
                  leftAvatar = {<Avatar icon = {<Info />} />}
                  primaryText= {props.data.pressure + " hPa"}
                  secondaryText = "Atmospheric pressure"
                />
                <Divider inset={true} />
                <ListItem
                  leftAvatar = {<Avatar icon = {<Info />} />}
                  primaryText=  {props.data.humidity + " %"}
                  secondaryText = "Humidity"
                />
                <Divider inset={true} />
                <ListItem
                  leftAvatar = {<Avatar icon = {<Info />} />}
                  primaryText=  {props.data.clouds + " %"}
                  secondaryText = "Cloudiness"
                />
                <Divider inset={true} />
                <ListItem
                  leftAvatar = {<Avatar icon = {<Info />} />}
                  primaryText=  {<span>{props.data.wind + " m/sec " + props.data.windDeg}<span> &deg;</span></span>}
                  secondaryText = "Wind speed and direction"
                />
                <Divider inset={true} />
          </List>
        </Paper>
      </div>
    </div>

  );
};

DetailedWeatherList.propTypes = {
  data: PropTypes.object
};

export default DetailedWeatherList;
