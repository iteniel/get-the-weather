import React, { PropTypes } from 'react';
// import {Link} from 'react-router';
import { grey700, white, grey500 } from 'material-ui/styles/colors';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import Data from '../assets/Data';

const styles = {
  appBar: {
    overflow: 'hidden',
    minHeight: 100,
    backgroundColor: grey700,
    paddingBottom: 5
  },
  menuButton: {
    marginLeft: 10
  },
  iconsRightContainer: {
    marginLeft: 20
  },
  chipWrapper: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 5,
  },
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 10,
    width: "75%"
  },
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
  },
};

const dataSourceConfig = {
  value: 'id',
  text: 'name'
};

class HeaderSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chipData: [],
    };

    this.handleRequestDelete = this.handleRequestDelete.bind(this);
    this.resultSelected = this.resultSelected.bind(this);
  }

  renderChip(data) {
    return (
      <Chip
        key={data.id}
        onRequestDelete={() => this.handleRequestDelete(data.id)}
        style={styles.chip}
      >
        {data.name}
      </Chip>
    );
  }

  resultSelected(selected) {
    let valid = selected.id != undefined ? true: false;
    let exist = this.state.chipData.map((chip) => chip.id).indexOf(selected.id) > -1 ? true : false;

    if (!exist && valid) {
      this.setState({
        chipData: [...this.state.chipData, selected]
      });
      this.props.addCity(selected.id);
    }
    this.refs.autocomplete.setState({searchText: ""});
  }

  handleRequestDelete(id) {
    let currentChipData = this.state.chipData;
    let chipToDelete = currentChipData.map((chip) => chip.id).indexOf(id);
    currentChipData.splice(chipToDelete, 1);
    this.setState({ chipData: currentChipData });
    this.props.removeCity(id);    
  }

  render() {
    return (
        <div style = {styles.appBar}>
          <div style = {styles.container} >
            <AutoComplete
              ref = "autocomplete"
              hintText = "Search..."
              fullWidth = {true}
              underlineShow = {false}
              filter = {AutoComplete.caseInsensitiveFilter}
              dataSource = {Data.cities}
              dataSourceConfig = {dataSourceConfig}
              textFieldStyle = {styles.textField}
              inputStyle = {styles.inputStyle}
              hintStyle = {styles.hintStyle}
              menuStyle = {styles.menu}
              onNewRequest = {this.resultSelected}
            />
            <div style = {styles.chipWrapper}>
              {this.state.chipData.map(this.renderChip, this)}
            </div>
          </div>
        </div>
      );
  }
}

HeaderSearch.propTypes = {
  addCity: PropTypes.func,
  removeCity: PropTypes.func
};

export default HeaderSearch;
