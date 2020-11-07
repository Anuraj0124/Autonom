import React, { Component } from 'react';
import  { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import TermsCondition from './TermsCondition';
import Confirm from './Confirm';
import Success from './Success';
import Axios from "axios";
import './Form.css';



export class UserForm extends Component {
  state = {
    step:0,
    result:"",
    peopleId:"", 
    region:"", 
    gender:"",
    designation:"",
    fname:"",
    married:"",
    children:"",
    occupation:"",
    mode_transport:"",
    cases:8,
    deaths:1,
    comorbidity:"",
    age:"",
    comaScore:"",
    pulmonaryScore:"",
    cardiologicalPressure:"",
    diuresis:"",
    platelets:"",
    hbb:"",
    ddimer:"",
    heartRate:"",
    hdlCholesterol:"",
    charlsonIndex:"",
    bloodGlucose:"",
    insurance:"",
    salary:"",
    ftmonth:""  
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  initStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - step
    });
  };
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { 
      result,
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
      ftmonth

    } = this.state;


    {/*this.setState({ [cases]: 8});
        this.setState({ [deaths]: 1});*/}

    
    const values = { 
      result,
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
      ftmonth
    };

    const validateData = () => {
    let data = {
      inputs: [
        parseInt(0),
        parseInt(gender),
        parseInt(0),
        parseInt(married),
        parseInt(children),
        parseInt(occupation),
        parseInt(mode_transport),
        parseInt(cases),
        parseInt(deaths),
        parseInt(comorbidity),
        parseInt(age),
        parseInt(comaScore),
        parseInt(pulmonaryScore),
        parseInt(cardiologicalPressure),
        parseInt(diuresis),
        parseInt(platelets),
        parseInt(hbb),
        parseInt(ddimer),
        parseInt(heartRate),
        parseInt(hdlCholesterol),
        parseInt(charlsonIndex),
        parseInt(bloodGlucose),
        parseInt(ftmonth),
      ],
    };
    console.log(data)
    sendData(data);
  };
    const sendData = (data) => {
    Axios.post("https://samhar-user-end.herokuapp.com/predict", data).then(
      (res) => {
        console.log(res.data.output);
        switch (res.data.output) {
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
        }
      }
    );
  };
    switch (step) {
      case 0:
        return(
            <TermsCondition
              nextStep={this.nextStep}
            />
          );
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            //validateData={this.validateData}//
            values={values}
          />
        );
      case 4:
        return (
          <Success 
            initStep={this.initStep}
          />
        );
      
      {/*case 5:
              return (
                this.setState({ [step]: 0})
      
      
                );*/}
    }
  }
}

export default UserForm;