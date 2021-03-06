import React from 'react';
import { grey700, grey900 } from 'material-ui/styles/colors';
import { typography } from 'material-ui/styles';
import globalStyles from '../assets/thene/styles';
import HeaderPages from '../components/HeaderPages';

const styles = {
  wrapper: {
    textAlign: "center",
    marginTop: 50
  },
  textOne: {
    fontSize: "10em",
    fontWeight: typography.fontWeightMedium,
    color: grey900,
    display: "block"
  },
  textTwo: {
    fontSize: 24,
    fontWeight: typography.fontWeightMedium,
    color: grey700,
    display: "block",
    marginTop: 100
  },
};

const NotFoundPage = () => {
  return (
    <div>
      <div>
        <HeaderPages title= "Sorry! Page Not Found" />
      </div>
      <div style={globalStyles.pageWrapper}>
        <h3 style={globalStyles.navigation}>Application / 404 Page Not Found</h3>
      
        <div style = {styles.wrapper}>
          <span style = {styles.textOne}>404</span>
          <span style = {styles.textTwo}>Page Not Found</span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
