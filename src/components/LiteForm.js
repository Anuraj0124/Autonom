import React, { Component } from 'react';
import  { useState } from 'react';
import LiteUserDetails from './LiteUserDetails';
import LiteMedicalDetails from './LiteMedicalDetails';
import LiteMedicalAdv from './LiteMedicalAdv';
import TermsCondition from './TermsCondition';
import LiteConfirm from './LiteConfirm';
import LiteSuccess from './LiteSuccess';
import Visualise from './Visualise';
import Axios from "axios";
import './Form.css';



export class LiteForm extends Component {
  state = {
      step1:0, 
      result:0,
      age:0, 
      sex:0, 
      country:0,
      postal_code:0,
      diabetes:false,
      copd:false,
      asthma:false,hypertension:false,
      cystic_fibrosis:false,
      heart_attack:false,
      stroke:false,
      heart_disease:false,
      kidney_disease:false,
      liver_disease:false,
      cancer:false,
      cell_anemia:false,
      hiv:false,
      none_of_them:true,
      q1_healthcare_visits:false,
      q2_treatment:0  
  };

  // Proceed to next step1
  nextStep = () => {
    const { step1 } = this.state;
    this.setState({
      step1: step1 + 1
    });
  };

  // Go back to prev step1
  prevStep = () => {
    const { step1 } = this.state;
    this.setState({
      step1: step1 - 1
    });
  };

  //initialize or new form
  initStep = () => {
    const { step1 } = this.state;
    this.setState({
      step1:0, 
      result:0,
      age:0, 
      sex:0, 
      country:0,
      postal_code:0,
      diabetes:false,
      copd:false,
      asthma:false,hypertension:false,
      cystic_fibrosis:false,
      heart_attack:false,
      stroke:false,
      heart_disease:false,
      kidney_disease:false,
      liver_disease:false,
      cancer:false,
      cell_anemia:false,
      hiv:false,
      none_of_them:true,
      q1_healthcare_visits:false,
      q2_treatment:0
    });
  };

  //handle passed result
  handleResult = (output) =>{
    this.setState({ ['result']: output });
  };

  // Handle fields change
  handleChange = input => e => {
    if(input=='q1_healthcare_visits'){
      (e.target.value=="0") ? this.setState({ [input]: false}) : this.setState({ [input]: true });
    }
    else if(input=='age' || input=='postal_code' || input=='q2_treatment'){
      this.setState({ [input]: parseInt(e.target.value)})
    }
    else{
    this.setState({ [input]: e.target.value });
    }
  };

   // Handle fields change
  handleChange2 = input => e => {
    (this.state[input]==false) ? this.setState({ [input]: true, none_of_them:false }) : this.setState({ [input]: false });
  };

  handleNone = e => {

    (this.state['none_of_them']==false) 
    ? 
      this.setState({
        diabetes:false,
        copd:false,
        asthma:false,hypertension:false,
        cystic_fibrosis:false,
        heart_attack:false,
        stroke:false,
        heart_disease:false,
        kidney_disease:false,
        liver_disease:false,
        cancer:false,
        cell_anemia:false,
        hiv:false,
        none_of_them:true
      }) 
    : 
      this.setState({ none_of_them:false });
    // console.log("hey");
  };

  render() {
    const { step1 } = this.state;
    const { 
      result,
      age, 
      sex, 
      country,
      postal_code,
      diabetes,
      copd,
      asthma,hypertension,
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

    } = this.state;
    
    const values = { 
      // result,
      age, 
      sex, 
      country,
      postal_code,
      diabetes,
      copd,
      asthma,hypertension,
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
    };
    
    switch (step1) {
      case 0:
        return(
            <TermsCondition
              nextStep={this.nextStep}
            />
          );
      case 1:
        return (
          <LiteUserDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />

        );
      case 2:
        return (
          <LiteMedicalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange2={this.handleChange2}
            handleNone={this.handleNone}
            values={values}
          />
        );
      case 3:
        return (
           <LiteMedicalAdv
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleChange2={this.handleChange2}
            handleNone={this.handleNone}
            values={values}
          />
        );
      case 4:
        return (
          <LiteConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleResult={this.handleResult}
            values={values}
          />
        );
      case 5:
        return (
          <LiteSuccess 
            initStep={this.initStep}
            nextStep={this.nextStep}
            values={values}
            result={result}

          />
        );
      
      {/*case 5:
              return (
                <Visualise
                  initStep={this.initStep}
                  prevStep={this.prevStep}
                  values={values}
                  
                />    
            
            
              );*/}
    }
  }
}

export default LiteForm;