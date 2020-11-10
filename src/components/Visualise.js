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
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
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
        return "yellow";
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
          
          <span className={this.getResultCsss(result)}>
            {this.getResult(result)}
          </span>
          <br />
          <div className='visualize_img'>
            <div class="gallery">
              <ul >
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
              </ul>
              <ul>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
              </ul>
              <ul>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
              </ul>
              <ul>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
              </ul>
              <ul>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
              </ul>
              <ul>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
              </ul>
            </div>
          </div>
          {/*<img className="visualize_img" src='/Autonom/images/Graph 1.png' alt="Random Forest" />
                    <img className="visualize_img" src='/Autonom/images/Graph 2.png' alt="Scalabilty" />
                    <img className="visualize_img" src='/Autonom/images/Graph 3.png' alt="Performance" />*/}
          <div className="btn1">
            <ThemeProvider theme={greenTheme}>
              <Button color="primary" variant="contained" onClick={this.back}>
                Back
              </Button>
            </ThemeProvider>
          </div>
          <div className="btn2">
              <Button color="primary" variant="contained" onClick={this.fill}>
                Fill Another Form 
              </Button>
          </div>
        </div>
      </Container>
    );
  }
}

export default Success;
