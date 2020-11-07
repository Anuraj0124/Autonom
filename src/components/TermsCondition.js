import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'  
import {
  TextField,
  Button,
  Container,
  Box,
  InputLabel,
  Select,
  Checkbox,
  InputBase,
  Icon
} from "@material-ui/core";
import './Form.css';

const greenTheme = createMuiTheme({ palette: { primary: green} })
export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  state = {
    check: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Container className="form_input">
          <div className="terms">
            <br/>
            <br />
            The services and information provided by the Application are not designed to diagnose whether you have contracted 
            COVID-19 or to predict whether you will contract COVID-19. The Application is designed to use your survey responses to 
            assess your risk factor in contracting and vulnerability to COVID-19.
            <br/>
            Responses to this survey may be useful in identifying concentrations of vulnerable individuals, mobilizing and allocating resources to 
            assist those individuals, and furthering research related to the COVID-19 pandemic.
            <br/>
            Click the checkbox to allow us to use of your provided details.
            <br/>
            <br/>
            <ThemeProvider theme={greenTheme} >
            <Checkbox
              color="primary"
              checked={this.state.check}
              onChange={this.handleChange('check')}
              value="false"
            />
            
            <Button 
              color="primary"
              variant="contained"
              disabled={this.state.check ? false : true}
              onClick={this.continue}
            >
              Accept and Start
            </Button>
            </ThemeProvider>
          </div>

      </Container>
    );
  }
}

export default FormUserDetails;

