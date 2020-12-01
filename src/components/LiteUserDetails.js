import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
// import validateInfo from './error.js';
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputBase,
} from "@material-ui/core";
import './Form.css';


export class LiteUserDetails extends Component {
  continue = e => {
    e.preventDefault();

    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  state = {
    check: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    const { values, handleChange } = this.props;
    // const  errors = validateInfo(values);
    return (
      <Container className="form_input">
            <div className="terms"> 
            <br/> 
            <h1>Enter Personal Details</h1>
            <br />
            Please enter the valid details.
            </div>
            <TextField
              variant="outlined"
              placeholder="Age serves as an important factor in determining your susceptibility factor."
              label="How Old Are You?"
              onChange={handleChange('age')}
              type="number" 
              defaultValue={values.age==0? "" : values.age }
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <br />
            <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
            <Select
              native
              label="Gender"
              onChange={handleChange('sex')}
              fullWidth
            >
            <option aria-label="None" value="" className="placeholder_item">What is your Gender?</option>
              <option value={"M"}>Male</option>
              <option value={"F"}>Female</option>
            </Select>
            <br />
            <br />
            <br />
            <TextField
              variant="outlined"
              placeholder="Different Country have different level of risks contirbuting to your risk factor."
              label="Which Country Are You From?"
              onChange={handleChange('country')}
              defaultValue={values.country==0? "" : values.country }
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              placeholder="A postal code is a series of letters or digits or both, that specifies your region or residential area."
              label="What's Your Postal Code"
              onChange={handleChange('postal_code')}
              defaultValue={values.postal_code==0? "" : values.postal_code}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <br />
            <br />
            <div className="btn1">
              <Button
                color="secondary"
                variant="contained"
                onClick={this.back}
              >
                Back
              </Button>
            </div>  
            <div className="btn2">
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >
                Continue
              </Button>
            </div>
      </Container>
    );
  }
}

export default LiteUserDetails;

