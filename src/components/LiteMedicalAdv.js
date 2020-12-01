import React, { Component } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'  
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
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

const greenTheme = createMuiTheme({ palette: { primary: green} })

export class LiteMedicalDetails extends Component {
  continue1 = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange2,handleChange} = this.props;

    return (
      <Container  className="form_input">
          
            <div className="terms"> 
            <br/> 
            <h1>Medical History</h1>
            <br />
            *These fields should be strictly filled after proper tests and validation.
            </div>
            <br />

            
            <InputLabel htmlFor="outlined-age-native-simple">Have you visited a healthcare professional for pnemonia, acute bronchitis, influenza or acute respiratory infection in the past year?</InputLabel>
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title="Pneumonia is an infection that causes the air sacs in the lungs to get irritated and swollen. They may fill up with fluid or pus and make it harder to breathe. Acute bronchitis is a viral infection that causes inflammation of the bronchial tubes. When these tubes get infected, they swell and make it harder to breathe. The flu, also called influenza, is a respiratory infection caused by viruses."

            ><span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            <Select
              native
              placeholder="The simultaneous presence of two or more diseases or medical conditions in a patient. (Hypertension / Diabetes / Coronary heart disease)"
              label="Have you visited a healthcare professional for pnemonia, acute bronchitis, influenza or acute respiratory infection in the past year?"
              onChange={handleChange('q1_healthcare_visits')}
              defaultValue={values.q1_healthcare_visits==0? "" : values.q1_healthcare_visits}
              fullWidth
            >
            <option aria-label="None" value="" className="placeholder_item"></option>
              <option value={0}>No Response</option>
              <option value={1}>YES</option>
              <option value={0}>NO</option>

            </Select>
            <br />
            <br />
            <br />
            <TextField
              label="How many times did you recieve treatment in the emergency room in the past year?"
              onChange={handleChange('q2_treatment')}
              type="number" inputProps={{ min: 0}}
              defaultValue={values.q2_treatment==0? ""  : values.q2_treatment}
              margin="normal"
              variant="outlined"
              fullWidth
            />
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
                onClick={this.continue1}
              >
                Continue
              </Button>
            </div>
      </Container>
    );
  }
}

export default LiteMedicalDetails;