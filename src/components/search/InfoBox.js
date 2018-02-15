import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {grey900, grey700} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';

class InfoBox extends React.Component {

  render() {
    const {city, date, temperature, description, humidity, wind} = this.props;

    const styles = {
      container: {
        display: "flex",
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
      },
      colOne: {
        width: "40%",
        display: "block",
        textAlign: "center"
      },
      colTwo: {
        width: "30%",        
        display: "block",
        textAlign: "center"
      },
      colThree: {
        width: "30%",
        display: "block",
        textAlign: "center"
      },
      city: {
        fontSize: 18,
        fontWeight: typography.fontWeightMedium,
        color: grey900,
        display: "block"
      },
      date: {
        fontSize: 14,
        fontWeight: typography.fontWeightLight,
        color: grey700,
        display: "block"
      },
      text: {
        fontSize: 14,
        fontWeight: typography.fontWeightLight,
        color: grey700,
        display: "block"
      },
      temperature: {
        fontSize: 24,
        fontWeight: typography.fontWeightMedium,
        color: grey900,
        display: "block"
      },
    };

    return (
      <Paper>
        <div style = {styles.container}>
          <div className= "colOne" style = {styles.colOne}>
            <span style = {styles.city}>{city}</span>
            <span style = {styles.date}>{date}</span>
          </div>
          <div className= "colTwo" style = {styles.colTwo}>
            <span style = {styles.temperature}>{temperature}<sup>&deg;C</sup></span>
            <span style = {styles.text}>{description}</span>
          </div>
          <div className= "colThree" style = {styles.colThree}>
            <span style = {styles.text}>humidity: {humidity}</span>
            <span style = {styles.text}>wind: {wind}</span>
          </div>
        </div>
      </Paper>
      );
  }
}

InfoBox.propTypes = {
  city: PropTypes.string,
  date: PropTypes.string,
  temperature: PropTypes.string,
  description: PropTypes.string,
  humidity: PropTypes.string,
  wind: PropTypes.string
};

export default InfoBox;
