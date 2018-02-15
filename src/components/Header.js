import React, {PropTypes} from 'react';
// import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import { white } from 'material-ui/styles/colors';
import SearchBox from './SearchBox';

class Header extends React.Component {

  render() {
    const {styles} = this.props;

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };

    return (
        <div>
            <AppBar
              style = {{...styles, ...style.appBar}}
              title = {<SearchBox />}
              iconElementLeft ={ 
                <IconButton style = {style.menuButton}>
                  <Search color = {white} />
                </IconButton>
              }            
            />
          </div>
      );
  }
}

Header.propTypes = {
  styles: PropTypes.object
};

export default Header;
