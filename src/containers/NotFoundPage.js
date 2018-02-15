import React from 'react';
import { grey700, grey900 } from 'material-ui/styles/colors';
import { typography } from 'material-ui/styles';

const styles = {
  container: {
    width: "100%",
    textAlign: "center",
    marginTop: 200
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
    <div style = {styles.container}>
      <span style = {styles.textOne}>404</span>
      <span style = {styles.textTwo}>Page Not Found</span>
    </div>
  );
};

export default NotFoundPage;
