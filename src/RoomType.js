import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup column>
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
        label="Individual Room"
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedB} onChange={handleChange('checkedB')} value="checkedB" />
        }
        label="Group Study"
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedC} onChange={handleChange('checkedC')} value="checkedC" />
        }
        label="Interview"
      />
    </FormGroup>
  );
}