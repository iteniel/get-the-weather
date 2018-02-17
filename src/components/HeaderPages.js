import React, { PropTypes } from 'react';
import { grey700, white } from 'material-ui/styles/colors';
import { typography } from 'material-ui/styles';

const styles = {
  appBar: {
    overflow: 'hidden',
    height: 55,
    backgroundColor: grey700
  },
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "75%",
    textAlign: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: typography.fontWeightMedium,
    color: white,
    display: "block",
    marginTop: 15
  }

};

class HeaderPages extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div style={styles.appBar}>
          <div style={styles.container}>
          <span style={styles.title}>{this.props.title}</span>
          </div>
        </div>
      );
  }
}

HeaderPages.propTypes = {
  title: PropTypes.string,
};

export default HeaderPages;
