import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey700, grey900, blue600 } from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: grey700
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600,
  }
});

export default themeDefault;