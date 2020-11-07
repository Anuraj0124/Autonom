import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'  
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

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    //{/*this.props.validateData();*/}//
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() { 
    const { values: { firstName, lastName, email, occupation, city,
  bio } } = this.props; 
  return ( 
      <Container className="form_input"> 
          <div className="terms"> 
            <br/> 
            Responses to this survey may be useful in
            identifying concentrations of vulnerable individuals, mobilizing and
            allocating resources to  assist those individuals, and furthering research
            related to the COVID-19 pandemic. The responses you filed will now be run
            through a process of prediction and computation which will in turn generate
            the risk factor of infection to you. 
            <br/> 
            We again inform you that we in no
            order declare the results of this application confirmatory. These results
            are only preliminary. If you are concerned you must get a check up
            from your physician. 
            <br/> 
            Stay well and Stay Healthy.   Click the button to
            confirm your response submission and we will take over from there. 
            <br/> <br/> <br/>
            <ThemeProvider theme={greenTheme} > 
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >
                Confirm and Submit
              </Button>
            </ThemeProvider>
          </div>

      </Container>
    );
  }
}

export default Confirm;
