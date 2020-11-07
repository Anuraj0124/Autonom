import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'  
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { Link } from 'react-router-dom';
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

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.initStep();
  };

  

  render() {

    const {
      values: {
        result,
        peopleId,
        region,
        gender,
        designation,
        fname,
        married,
        children,
        occupation,
        mode_transport,
        cases,
        deaths,
        comorbidity,
        age,
        comaScore,
        pulmonaryScore,
        cardiologicalPressure,
        diuresis,
        platelets,
        hbb,
        ddimer,
        heartRate,
        hdlCholesterol,
        charlsonIndex,
        bloodGlucose,
        insurance,
        salary,
        ftmonth,
      },
    } = this.props;
    return (
      <Container>
        <div className="terms"> 
          {console.log("hey in sucess",{result})}
          <br/> 
          Your survey responses do not include any risk factors currently established by the CDC as creating an elevated risk for serious illness from COVID-19. 
          <br/> 
          No one is immune to contracting the COVID-19 virus. It is a new disease and medical experts are still learning about the severity  of illness it causes. Other Medical conditions may still place you at higher risk and you should consult your physician if you are concerned.
          <br/> 
          The resulting risk factor for you is :
          <br/>
          {/*this.props.result*/}/************************Output*****************************/
          <br/>
          Stay well and Stay Healthy.
          <br/>
          Click the button to fill the form again. 
          <br/>
          <ThemeProvider theme={greenTheme} > 
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >
              Fill Another Form
            </Button>
          </ThemeProvider>

        </div>
      </Container>
    );
  }
}

export default Success;
