import React, { Component } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import { Link } from "react-router-dom";
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
import "./Form.css";
const greenTheme = createMuiTheme({ palette: { primary: green } });

export class Success extends Component {
  fill = (e) => {
    e.preventDefault();
    this.props.initStep();
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  getResultCsss = (result) => {
    if(result=="High Risk")  return "red";
    if(result=="Intermideate Risk")  return "orange";
    if(result=="Slight")  return "yellow";
    if(result=="Normal")  return "green";
    
  };
  getResult = (result) => {
    if(result=="High Risk")  return "Highly Vulnerable";
    if(result=="Intermideate Risk")  return "Intermediately Vulnerable";
    if(result=="Slight")  return "Slightly Vulnerable";
    if(result=="Normal")  return "Normal";
    
  };

  render() {
    const {
      values: {
        // result,
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
      result
    } = this.props;
    return (
      <Container>
        <div className="terms">
          <br />
          Your survey responses do not include any risk factors currently
          established by the CDC as creating an elevated risk for serious
          illness from COVID-19.
          <br />
          No one is immune to contracting the COVID-19 virus. It is a new
          disease and medical experts are still learning about the severity of
          illness it causes. Other Medical conditions may still place you at
          higher risk and you should consult your physician if you are
          concerned.
          <br />
          The resulting risk factor for you is :
          <br />
          <span className={this.getResultCsss(result)}>
            {this.getResult(result)}
          </span>
          <br />
          Stay well and Stay Healthy.
          <br />
          Click the button to fill the form again.
          <br />
          <br />
            <ThemeProvider theme={greenTheme}>
              <Button color="primary" variant="contained" onClick={this.fill}>
                Fill Another Form
              </Button>
            </ThemeProvider>
         
        </div>
      </Container>
    );
  }
}

export default Success;
