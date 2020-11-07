import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
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


export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Container  className="form_input">
          
            <div className="terms"> 
            <br/> 
            <h1>Enter Medical Details</h1>
            <br />
            *These fields should be strictly filled after proper tests and validation.
            </div>
            <br />
            <InputLabel htmlFor="outlined-age-native-simple">Comorbidity</InputLabel>
            <Select
              native
              placeholder="The simultaneous presence of two or more diseases or medical conditions in a patient. (Hypertension / Diabetes / Coronary heart disease)"
              label="Comorbidity"
              onChange={handleChange('comorbidity')}
              defaultValue={values.comorbidity==0? "" : values.comorbidity}
              fullWidth
            >
            <option aria-label="None" value="" className="placeholder_item">The simultaneous presence of two or more diseases or medical conditions in a patient. (Hypertension / Diabetes / Coronary heart disease)</option>
              <option value={0}>Hypertension</option>
              <option value={1}>Diabetes</option>
              <option value={2}>Coronary Heart Disease</option>

            </Select>
            <br />
            <br />
            <TextField
              placeholder="Enter Your Age"
              label="Age"
              onChange={handleChange('age')}
              type="number" inputProps={{ min: 1, max: 120, step: 1}}
              defaultValue={values.age==0? "" : values.age}
              fullWidth
            />
            <br />
            <br />
            <TextField
              placeholder="The Glasgow Coma Scale (GCS) is a neurological scale
     which aims to give the state of a person's consciousness for 
     initial as well as subsequent assessment."
              label="Coma Score"
              onChange={handleChange('comaScore')}
              type="number" inputProps={{ min: 1, max: 15, step: 1}}
              defaultValue={values.comaScore==0? "" : values.comaScore}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <br />
            <InputLabel htmlFor="outlined-age-native-simple">Pulmonary Score (mmHg)/FiO2</InputLabel>
            <Select
              native
              label="Pulmonary Score"
              onChange={handleChange('pulmonaryScore')}
              defaultValue={values.pulmonaryScore==0? "" : values.pulmonaryScore}
              fullWidth
            >
            <option aria-label="None" value="" className="placeholder_item">PaO2 (partial pressure of oxygen) reflects the amount of 
    oxygen gas dissolved in the blood. </option>
              <option value={0}>less than 100</option>
              <option value={1}>less than 200</option>
              <option value={2}>less than 300</option>
              <option value={3}>less than 400</option>

            </Select>
            <br />
            <br />
            <br />
            <InputLabel htmlFor="outlined-age-native-simple">Cardiological Pressure (mmHg)</InputLabel>
           
            <Select
              native
              label="Cardiological Pressure"
              onChange={handleChange('cardiologicalPressure')}
              defaultValue={values.cardiologicalPressure==0? "" : values.cardiologicalPressure}
              fullWidth
            >
            <option aria-label="None" value="" className="placeholder_item">Mean Arterial pressure is defined as the average pressure in 
    a patient's arteries during one cardiac cycle.</option>
              <option value={0}>Normal</option>
              <option value={1}>Elevated</option>
              <option value={2}>Stage-01</option>
              <option value={3}>Stage-02</option>

            </Select>
            <br />
            <br />
            <TextField
              placeholder="Diuresis is the proces when your kidneys make extra pee when your body needs to get rid of a substance."
              label="Diuresis in mL/Day"
              onChange={handleChange('diuresis')}
              type="number" inputProps={{ min: 0}}
              defaultValue={values.diuresis==0? "" : values.diuresis}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <TextField
              placeholder="The platelet count is a test that determines the number of platelets in your sample of blood, that are essential for normal blood clotting."
              label="Haematological Platelets 10/L"
              onChange={handleChange('platelets')}
              type="number" inputProps={{ min: 0}}
              defaultValue={values.platelets==0? ""  : values.platelets}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <TextField
              placeholder="The bilirubin blood test is useful to know the liver and bile ducts functional status."
              label="Hepatic Blood bilirubin (µmol/L)"
              onChange={handleChange('hbb')}
              defaultValue={values.hbb==0? "" : values.hbb}
              type="number" inputProps={{ min: 0}}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <TextField
              placeholder="D-dimer is the degradation product of crosslinked fibrin. It reflects ongoing activation of the hemostatic system."
              label="D-dimer concentration in the blood (ng/ml)"
              onChange={handleChange('ddimer')}
              type="number" inputProps={{ min: 0}}
              defaultValue={values.ddimer==0? "" : values.ddimer}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <TextField
              placeholder="Number of times a person's heart beats per minute"
              label="Heart Rate "
              onChange={handleChange('heartRate')}
              type="number" inputProps={{ min: 0}}
              defaultValue={values.heartRate==0? "" : values.heartRate}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <TextField
              placeholder="High-density lipoprotein helps remove other forms of cholesterol from your bloodstream. "
              label="HDL cholestrol value (milligrams per decilitre)"
              onChange={handleChange('hdlCholesterol')}
              type="number" inputProps={{ min: 0}}
              defaultValue={values.hdlCholesterol==0? "" : values.hdlCholesterol}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <TextField
              placeholder="One-year mortality for a patient who may have a range of conditions such as heart disease, AIDS, or cancer"
              label="Charlson Index"
              onChange={handleChange('charlsonIndex')}
              defaultValue={values.charlsonIndex==0? "" : values.charlsonIndex}
              type="number" inputProps={{ min: 0, max: 40, step: 1}}
              margin="normal"
              fullWidth
            />
            <br />
            <br />

            <TextField
              placeholder="Concentration of glucose present in the blood "
              label="Blood Glucose (millimoles per litre)"
              onChange={handleChange('bloodGlucose')}
              type="number" inputProps={{ min: 0}}
              defaultValue={values.bloodGlucose==0? "" : values.bloodGlucose}
              margin="normal"
              fullWidth
            />
            <br />
            <br />

            {/*<TextField
                          placeholder="Medical Insurance Expense cover "
                          label="Insurance(in Rs.)"
                          type="number" inputProps={{ min: 0, step:0.01}}
                          onChange={handleChange('insurance')}
                          defaultValue={values.insurance==0? "" : values.insurance}
                        
                          margin="normal"
                          fullWidth
                        />
                        <br />
                        <br /><TextField
                          placeholder="Annual salary of the person "
                          label="Salary (in Rs.)"
                          type="number" inputProps={{ min: 0,step:0.01}}
                          onChange={handleChange('salary')}
                          defaultValue={values.salary==0? "" : values.salary}
                          margin="normal"
                          fullWidth
                        />
                        <br />
                        <br />*/}
            <TextField
              placeholder="Average number of foreign trips taken by the person per month, considering last 2 year."
              label="Foreign Trips/month"
              onChange={handleChange('ftmonth')}
              type="number" inputProps={{ min: 0}}
              defaultValue={values.ftmonth==0? "" : values.ftmonth}
              margin="normal"
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
                onClick={this.continue}
              >
                Continue
              </Button>
            </div>
      </Container>
    );
  }
}

export default FormPersonalDetails;