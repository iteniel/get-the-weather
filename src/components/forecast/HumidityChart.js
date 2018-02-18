import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, blue600, blue500} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import {typography} from 'material-ui/styles';

const HumidityChart = (props) => {

  const styles = {
    paper: {
      backgroundColor: blue500,
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
      backgroundColor: blue600,
      padding: 10,
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...styles.header}}>Humidity % </div>
      <div style={styles.div}>
        <ResponsiveContainer>
          <LineChart data={props.data}>
            <XAxis dataKey="date" stroke = {white} />
            <YAxis stroke = {white} />
            <Tooltip />
            <Legend wrapperStyle = {{color: white}}/>
            <Line type="monotone" dataKey="humidity" stroke="#f44242" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

HumidityChart.propTypes = {
  data: PropTypes.array
};

export default HumidityChart;
