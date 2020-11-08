import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import validateInfo from './error.js';
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


export class FormUserDetails extends Component {
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
    const  errors = validateInfo(values);
    return (
      <Container className="form_input">
            <div className="terms"> 
            <br/> 
            <h1>Enter Personal Details</h1>
            </div>
            <TextField
              variant="outlined"
              placeholder="Aadhaar is a 12-digit unique identity number that can be obtained voluntarily by residents or passport holders of India, based on their biometric and demographic data."
              label="Aadhaar Number"
              onChange={handleChange('peopleId')}
              type="number" 
              defaultValue={values.peopleId==0? "" : values.peopleId }
              helperText={errors.peopleId ? '' : '( Required | Cannot be negative | Should be a 12 digit ID)'}
              error={!errors.peopleId}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              placeholder="The residential area or any landmark destination you belong to."
              label="Region"
              onChange={handleChange('region')}
              defaultValue={values.region==0? "" : values.region }
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
              onChange={handleChange('gender')}
              fullWidth
            >
            <option aria-label="None" value="" className="placeholder_item">What is your Gender?</option>
              <option value={0}>Male</option>
              <option value={1}>Female</option>
            </Select>
            <br />
            <br />
            <br />
            <InputLabel htmlFor="outlined-age-native-simple">Designation</InputLabel>
            <Select
              native
              label="Designation"
              onChange={handleChange('designation')}
              defaultValue={values.designation==0? "" : values.designation}
              fullWidth
            >
            <option aria-label="None" value="" className="placeholder_item">Designation..</option>
              <option value={0}>Mr.</option>
              <option value={1}>Mrs.</option>
            </Select>
            <br />
            <br />
            <TextField
              variant="outlined"
              placeholder="Enter Your Name"
              label="Name"
              onChange={handleChange('fname')}
              defaultValue={values.fname==0? "" : values.fname}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <br />
            <InputLabel htmlFor="outlined-age-native-simple">Married</InputLabel>
            <Select
              native
              label="Are you Married?"
              onChange={handleChange('married')}
              defaultValue={values.married==0? "" : values.married}
              fullWidth
            >
            <option aria-label="None" value="" className="placeholder_item">Are you Married?</option>
              <option value={0}>Yes</option>
              <option value={1}>No</option>
            </Select>
            <br />
            <br />
            <TextField
              
              variant="outlined"
              placeholder="How many children do you have?"
              label="Children"
              type="number" inputProps={{ min: 0, max: 10, step: 1}}
              onChange={handleChange('children')}
              defaultValue={values.children==0? "" : values.children}
              helperText={!errors.children ? 'Children Number incorrect (Required | Cannot be Negative)': '' }
              error={!errors.children}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <br />
            <InputLabel htmlFor="outlined-age-native-simple">Occupation</InputLabel>
            <Select
              native
              label="What do you do for a living?"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation==0? "" : values.occupation }
              fullWidth
            >
              <option aria-label="None" value="" className="placeholder_item"> What do you do for a living?</option>
              <option value={4}>Farmer </option>
              <option value={1}>Cleaner</option>
              <option value={3}>Driver</option>
              <option value={6}>Manufacturing</option>
              <option value={2}>Clerk</option>
              <option value={8}>Sales</option>
              <option value={0}>Buissness</option>
              <option value={7}>Researcher</option>
              <option value={5}>Legal</option>
            </Select>
            <br />
            <br />
            <br />
            <InputLabel htmlFor="outlined-age-native-simple">Mode of Transport</InputLabel>
            <Select
              native
              label="Mode of Transport"
              onChange={handleChange('mode_transport')}
              defaultValue={values.mode_transport==0? "" : values.mode_transport}
              fullWidth
            >
            <option aria-label="None" value="" className="placeholder_item">How do you travel in city?</option>
              <option value={0}>Car</option>
              <option value={1}>Walk</option>
              <option value={2}>Pubic Transport</option>
            </Select>
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

export default FormUserDetails;

