import React from 'react';
import TextField from 'material-ui/TextField';
import {white, grey500} from 'material-ui/styles/colors';

const SearchBox = () => {

  const styles = {
    textField: {
      color: white,
      backgroundColor: grey500,
      borderRadius: 2,
      height: 35
    },
    inputStyle: {
      color: white,
      paddingLeft: 5
    },
    hintStyle: {
      height: 16,
      paddingLeft: 5,
      color: white
    }
  };

  return (
    <div>
      <TextField
        hintText = "Search..."
        underlineShow = {false}
        fullWidth = {true}
        style = {styles.textField}
        inputStyle = {styles.inputStyle}
        hintStyle = {styles.hintStyle}
      />
    </div>
  );
};

export default SearchBox;
