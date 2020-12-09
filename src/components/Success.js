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

export class Success extends Component {
  fill = (e) => {
    e.preventDefault();
    this.props.initStep();
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  getResult = (result) => {
    switch (result) {
      case "2":
        return "You are in Medium Risk";
        break;
      case "1":
        return "You are in low Risk";
        break;
      case "0":
        return "You are in High Risk";
        break;
      default:
        return "You are in low Risk.";
    }
  };

  getResultCsss = (result) => {
    switch (result) {
      case "2":
        return "orange";
        break;
      case "1":
        return "green";
        break;
      case "0":
        return "red";
        break;
      default:
        return "green";
    }
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
          <div className="btn1">
              <Button color="primary" variant="contained" onClick={this.fill}>
                Fill Another Form
              </Button>
          </div>
          <div className="btn2">
              <Button color="primary" variant="contained" onClick={this.continue}>
                Checkout How It Works!!
              </Button>
          </div>
        </div>
      </Container>
    );
  }
}

export default Success;
