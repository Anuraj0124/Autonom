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
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  handlePlot = (val) => {
    console.log(val);
    // funcForPlot(val);
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
      <>
        <div className="terms ">
          
          {/*<span className={this.getResultCsss(result)}>
                      {this.getResult(result)}
                    </span>*/}
          {/*<div className='visualize_img'>
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
                    </div>*/}
          {/*<img className="visualize_img" src='/Autonom/images/Graph 1.png' alt="Random Forest" />
                    <img className="visualize_img" src='/Autonom/images/Graph 2.png' alt="Scalabilty" />
                    <img className="visualize_img" src='/Autonom/images/Graph 3.png' alt="Performance" />*/}



          <div
            className='visual-section darkBg'
          >
            <div className='container'>
              <div className='row home__hero-row'> 
                <div className='head_col'>
                    <h1 className='heading'>
                          VISUALISATION
                    </h1>
                </div>
              </div>
              <div className='row home__hero-row'> 
                <div className='img_col'>
                  <div class="side left1"></div>
                  <div class="side right1"></div>
                  <div className='wrapper'>
                    <img  className=' front1 visualize_img' src='/Autonom/images/Graph 1.png' alt=''  />
                  </div>
                </div>
                <div className='img_col'>
                  <div class="side left2"></div>
                  <div class="side right2"></div>                  
                  <div className='wrapper'>
                    <img  className=' front2 visualize_img' src='/Autonom/images/Graph 2.png' alt=''  />
                  </div>
                </div>
                <div className='img_col'>
                  <div class="side left3"></div>
                  <div class="side right3"></div>                
                  <div className='wrapper'>
                    <img  className=' front3 visualize_img' src='/Autonom/images/Graph 3.png' alt=''  />
                  </div>
                </div>
                </div>
                <br />
                <div className='row home__hero-row'> 
                    <p className= 'visual-subtitle  ' > 
                      In the present
                      work, Random Forest classifier and support vector regression techniques are
                      applied to a medical health care dataset containing 27 variables for
                      predicting the susceptibility score of an individual towards COVID-19
                      infection and the accuracy of prediction is compared. An effective
                      preprocessing is carried for handling the missing data in the health care data
                      set. Correlation analysis using heat map is carried on the health care data
                      for analyzing the influencing factors of Infection Susceptibility Probability
                      (ISP) score of COVID-19. A confusion matrix is calculated for understanding
                      the performance of classification of the based on the number of
                      True-Positives, True-Negatives, False-Positives and False-Negatives. These
                      values further used to calculate the accuracy, Precision, Sensitivity and
                      F-scores. 
                    </p> 
              </div>
            </div>
          </div>
          <br />
          <InputLabel htmlFor="outlined-age-native-simple"><h2>Where you stand on the basis of: </h2></InputLabel>
          <br />
          <Select
            className="visual-select"
            native
            onChange={
              (e)=>this.handlePlot(e.target.value)
            }
          >

            <option aria-label="None" value="" className="placeholder_item">Fields</option>
            <option value={0}> Aadhaar Number</option>
            <option value={1}> Gender  </option>
            <option value={2}> Designation </option>
            <option value={3}> Married </option>
            <option value={4}> Children </option>
            <option value={5}> Occupation </option>
            <option value={6}> Mode of transport </option>
            <option value={7}> Cases  </option>
            <option value={8}> Deaths </option>
            <option value={9}> Comorbidity  </option>
            <option value={10}> Age  </option>
            <option value={11}> Coma Score</option>
            <option value={12}> Pulmonary Score</option>
            <option value={13}> Cardiological Pressure</option>
            <option value={14}>  Diuresis </option>
            <option value={15}> Platelets  </option>
            <option value={16}> HBB  </option>
            <option value={17}> D-Dimer  </option>
            <option value={18}> Heart Rate  </option>
            <option value={19}> HDL Cholesterol  </option>
            <option value={20}> Charlson Index </option>
            <option value={21}>Blood Glucose  </option>
            <option value={22}>Foreign Trips/ month  </option>
          </Select>
          <br />
          <br />
          <img  className='plot' src='/Autonom/images/Graph 3.png' alt=''  />

          <div className="btn1">
              <Button color="primary" variant="contained" onClick={this.back}>
                Back
              </Button>
          </div>
          <div className="btn2">
              <Button color="primary" variant="contained" onClick={this.fill}>
                Fill Another Form 
              </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Success;
