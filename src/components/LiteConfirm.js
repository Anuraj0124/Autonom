  import React, { Component } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
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
  LinearProgress
} from "@material-ui/core";
import "./Form.css";

const greenTheme = createMuiTheme({ palette: { primary: green } });

export class Confirm extends Component {
  state={
    isLoading:false,
    isButton:true,

  };
  handleLoad = () =>  {
    this.setState({ ['isLoading']: true });
    this.setState({ ['isButton']: false});

  };
  continue = () => {
    
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  parseData = (data) => {
    this.handleLoad();
    Axios.post("http://14.139.180.154:5000/lite", data)
      .then((res) => {

        console.log("Hey this is your result", res.data.data);
        this.props.handleResult(res.data.data);
        this.continue();
      })
      .catch((err) => {
        console.log("Axios", err);
      });
  };

  render() {
    const {isLoading,isButton}=this.state;
    const { values, handleChange } = this.props;
    const {
      values: {
        result,
        age, 
        sex, 
        country,
        postal_code,
        diabetes,
        copd,
        asthma,
        hypertension,
        cystic_fibrosis,
        heart_attack,
        stroke,
        heart_disease,
        kidney_disease,
        liver_disease,
        cancer,
        cell_anemia,
        hiv,
        none_of_them,
        q1_healthcare_visits,
        q2_treatment
      },
    } = this.props;

    const data = {
      inputs: [
        parseInt(Object.values({age})), 
        sex, 
        country,
        parseInt(Object.values({postal_code})),
        diabetes,
        copd,
        asthma,
        hypertension,
        cystic_fibrosis,
        heart_attack,
        stroke,
        heart_disease,
        kidney_disease,
        liver_disease,
        cancer,
        cell_anemia,
        hiv,
        none_of_them,
        q1_healthcare_visits,
         parseInt(Object.values({q2_treatment}))
      ],
    };
    return (
      <Container className="form_input">
        <div className="terms">
          <br />
          Responses to this survey may be useful in identifying concentrations
          of vulnerable individuals, mobilizing and allocating resources to
          assist those individuals, and furthering research related to the
          COVID-19 pandemic. The responses you filed will now be run through a
          process of prediction and computation which will in turn generate the
          risk factor of infection to you.
          <br />
          We again inform you that we in no order declare the results of this
          application confirmatory. These results are only preliminary. If you
          are concerned you must get a check up from your physician.
          <br />
          Stay well and Stay Healthy. Click the button to confirm your response
          submission and we will take over from there.
          <br /> <br /> <br />
          <div className="btn1">
           {isButton &&  <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>}
          </div>

          <div className="btn2">
            <ThemeProvider theme={greenTheme}>
              {isButton && <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  
                  this.parseData(values)}
                }
              >
                Confirm and Submit
              </Button>}
            </ThemeProvider>
          </div>
          {isLoading && <LinearProgress />}
          <br />
        </div>
      </Container>
    );
  }
}

export default Confirm;
