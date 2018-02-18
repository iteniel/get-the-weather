import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, green600, green500} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import {typography} from 'material-ui/styles';

const WindChart = (props) => {

  const styles = {
    paper: {
      backgroundColor: green500,
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
      backgroundColor: green600,
      padding: 10,
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...styles.header}}>Wind km/h</div>
      <div style={styles.div}>
        <ResponsiveContainer>
          <LineChart data={props.data}>
            <XAxis dataKey="date" stroke = {white} />
            <YAxis stroke = {white} />
            <Tooltip />
            <Legend wrapperStyle = {{color: white}}/>
            <Line type="monotone" dataKey="wind" stroke="#f44242" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

WindChart.propTypes = {
  data: PropTypes.array
};

export default WindChart;
