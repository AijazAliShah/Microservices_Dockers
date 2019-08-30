import React from "react";
// plugin that creates slider
import nouislider from "nouislider";
// react component plugin for creating beatiful tags on an input
import TagsInput from "react-tagsinput";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import Paginations from "components/Pagination/Pagination.jsx";
import Badge from "components/Badge/Badge.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx";

class SectionBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false,
      simpleSelect: "",
      multipleSelect: [],
      tags: ["amsterdam", "washington", "sydney", "beijing"]
    };
    this.handleTags = this.handleTags.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  componentDidMount() {}
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleMultiple = event => {
    this.setState({ multipleSelect: event.target.value });
  };
  handleTags(regularTags) {
    this.setState({ tags: regularTags });
  }
  render() {
    const { classes, name, list } = this.props;
    return (
      <div id="select" className={classes.dropDown}>
        <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel htmlFor="multiple-select" className={classes.selectLabel}>
            {"By " + name}
          </InputLabel>
          <Select
            multiple
            value={this.state.multipleSelect}
            onChange={this.handleMultiple}
            MenuProps={{
              className: classes.selectMenu,
              classes: { paper: classes.selectPaper }
            }}
            classes={{ select: classes.select }}
            inputProps={{
              name: "multipleSelect",
              id: "multiple-select"
            }}
          >
            <MenuItem
              disabled
              classes={{
                root: classes.selectMenuItem
              }}
            >
              {"Select " + name}
            </MenuItem>
            {
             
            list.map((item, i)=> (
                <MenuItem
                classes={{
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelectedMultiple
                }}
                value={i}
              >
                {item}
              </MenuItem>
            ))}
{/*             
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelectedMultiple
              }}
              value="2"
            >
              Paris
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelectedMultiple
              }}
              value="3"
            >
              Bucharest
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelectedMultiple
              }}
              value="4"
            >
              Rome
            </MenuItem> */}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionBasics);
