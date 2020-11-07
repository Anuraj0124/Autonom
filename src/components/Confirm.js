import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors' 
import Axios from "axios";
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
    // this.validateData();//
    this.data();
    console.log("hello",this.data);
    console.log(this.state.finalValues);
    // this.sendData(this.data);//
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  state={
    finalValues: []

  }


  render() { 

    const { values: { result,
      peopleId, 
      region, 
      gender,
      designation,
      fname,
      married,
      children,occupation,
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
      ftmonth } } = this.props; 

      const  data = () =>{
      var inputs= [
        (0),
        parseInt(Object.values({gender})),
        (0),
        parseInt(Object.values({married})),
        parseInt(Object.values({children})),
        parseInt(Object.values({occupation})),
        parseInt(Object.values({mode_transport})),
        parseInt(Object.values({cases})),
        parseInt(Object.values({deaths})),
        parseInt(Object.values({comorbidity})),
        parseInt(Object.values({age})),
        parseInt(Object.values({comaScore})),
        parseInt(Object.values({pulmonaryScore})),
        parseInt(Object.values({cardiologicalPressure})),
        parseInt(Object.values({diuresis})),
        parseInt(Object.values({platelets})),
        parseInt(Object.values({hbb})),
        parseInt(Object.values({ddimer})),
        parseInt(Object.values({heartRate})),
        parseInt(Object.values({hdlCholesterol})),
        parseInt(Object.values({charlsonIndex})),
        parseInt(Object.values({bloodGlucose})),
        parseInt(Object.values({ftmonth})),
      ]
      this.setState({
        finalValues: inputs
      })

    };
    
    const sendData = (data) => {
    Axios.post("https://samhar-user-end.herokuapp.com/predict", data).then(
      (res) => {
        console.log(res.data.output);
        {/*switch (res.data.output) {
                  case "1":
                    this.setState({ [result]: "You are in Medium Risk"});
                    break;
                  case "2":
                    this.setState({ [result]: "You are in High Risk"});
                    break;
                  case "0":
                    this.setState({ [result]: "You are in low risk"});
                    break;
                  default:
                    this.setState({ [result]: "You are in low riks"});
                }*/}
      }
    );
  };
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
            {console.log(data)}
            We again inform you that we in no
            order declare the results of this application confirmatory. These results
            are only preliminary. If you are concerned you must get a check up
            from your physician. 
            <br/> 
            Stay well and Stay Healthy.   Click the button to
            confirm your response submission and we will take over from there. 
            <br/> <br/> <br/>
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
          </div>

      </Container>
    );
  }
}

export default Confirm;
