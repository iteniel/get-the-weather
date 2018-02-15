import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import ThemeDefault from '../assets/thene/theme-default';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {


    const styles = {
      header: {
        paddingLeft: 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: 0
      }
    };

    return (
      <MuiThemeProvider muiTheme = {ThemeDefault}>
        <div>
          <Header styles = {styles.header} />

          <div style = {styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
