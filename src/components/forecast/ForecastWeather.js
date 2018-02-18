import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { white, orange500 } from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Info from 'material-ui/svg-icons/action/info-outline';

const ForecastWeather = (props) => {

  const styles = {
    subheader: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      backgroundColor: orange500,
      color: white
    }
  };

  return (
    <Paper>
      <List>
        <Subheader style ={styles.subheader}>Weather Details</Subheader>
        {props.data.map((item, index)  =>
          <div key={index}>
            <ListItem
              leftAvatar={<Avatar icon={<Info />} />}
              primaryText={item.date}
              secondaryText={item.weather}
            />
            <Divider inset={true} />
          </div>
        )}
      </List>
    </Paper>
  );
};

ForecastWeather.propTypes = {
  data: PropTypes.array
};

export default ForecastWeather;
