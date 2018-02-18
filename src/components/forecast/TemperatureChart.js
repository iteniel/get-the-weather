import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, red600, red500} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, ReferenceLine} from 'recharts';
import {typography} from 'material-ui/styles';

const TemperatureChart = (props) => {

  const styles = {
    paper: {
      backgroundColor: red500,
      height: 205
    },
    div: {
      height: 150,
      padding: '5px 15px 0 15px'
    },
    header: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      color: white,
      backgroundColor: red600,
      padding: 10,
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...styles.header}}>Temperature <span>&deg;C</span></div>
      <div style={styles.div}>
        <ResponsiveContainer>
          <LineChart data={props.data}>
            <XAxis dataKey="date" stroke = {white} />
            <YAxis stroke = {white} />
            <Tooltip />
            <Legend wrapperStyle = {{color: white}}/>
            <ReferenceLine y = {0} stroke = {white}/>
            <Line type="monotone" dataKey="temperature" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

TemperatureChart.propTypes = {
  data: PropTypes.array
};

export default TemperatureChart;
