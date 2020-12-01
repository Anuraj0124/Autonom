import React, { Component } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'  
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
// import validateInfo from './error.js';
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

export class LiteMedicalDetails extends Component {
  continue1 = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange2,handleNone} = this.props;

    return (
      <Container  className="form_input">
          
            <div className="terms"> 
            <br/> 
            <h1>Medical History</h1>
            <br />
            *These fields should be strictly filled after proper tests and validation.
            <br />
            <br />
            Have you ever been told by a doctor or physician that you have:
            </div>
            <br />
            <div className="lite-btn">
            <Button
              color={values.diabetes ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('diabetes')}
            >
            Diabetes 
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title=" Diabetes occurs when the body is unable to regulate the amount of glucose (sugar) in the blood."

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.copd ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('copd')}
            >
            Chronic Obstructive Pulmonary Disease (COPD) or related diseases
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title="COPD is a chronic inflammatory lung disease that causes obstructed airflow from the lungs. Symptoms include breathing difficulty, cough, mucus (sputum) production and wheezing. "

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.asthma ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('asthma')}
            >
            Asthma 
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title="Asthma is a chronic lung disorder that causes airwaysto become inflamed, which means that they swell and produce lots of thick mucus. Symptoms include breathing difficulty and obstruction."

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.hypertension ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('hypertension')}
            >
            Hypertension
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title="Hypertension or high blood pressure is a chronic medical condition in which the blood pressure in the arteries is higher than it should be."

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.cystic_fibrosis ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('cystic_fibrosis')}
            >
            Cystic Fibrosis 
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title="Cystic fibrosis is a genetic disease. It affects the glands that produce mucus and sweat, causing mucus to become thick and sticky. As the mucus builds up, it can block airways in the lungs."

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.heart_attack ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('heart_attack')}
            >
            Had a heart Attack 
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title=" The death of heart muscle due to the loss of blood supply. The loss of blood supply is usually caused by a complete blockage of a coronary artery. Death of the heart muscle, in turn, causes chest pain."

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.stroke ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('stroke')}
            >
            Had a stroke 
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title="The sudden death of brain cells due to lack of oxygen, caused by blockage of blood flow or rupture of an artery to the brain. Sudden loss of speech, weakness, or paralysis of one side of the body can be symptoms."

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.heart_disease ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('heart_disease')}
            >
            Coronary Atherosclerosis or other heart disease 
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title="Cardiovascular or heart disease generally refers to conditions that involve narrowed or blocked blood vessels that can lead to a heart attack, chest pain (angina) or stroke."

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.kidney_disease ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('kidney_disease')}
            >
            Chronic Kidney Disease 
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title="Chronic kidney disease, also called chronic kidney failure, describes the gradual loss of kidney function. Symptoms include decrease in daily urine production and leg or abdominal swelling."

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.liver_disease ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('liver_disease')}
            >
            Liver Disease 
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title=" Liver disease refers to any disorder of the liver.Liver disease includes the following conditions: Cirrhosis, or scarring of the liver."

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.cancer ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('cancer')}
            >
            Cancer 
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title="Cancer is the name given to a collection of related diseases in which, some of the body's cells begin to divide without stopping and spread into surrounding tissues. "

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.cell_anemia ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('cell_anemia')}
            >
            Sickle Cell Anemia 
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title="A genetic blood disease due to the presence of an abnormal form of hemoglobin, namely hemoglobin S. Hemoglobin is the molecule in red blood cells that transports oxygen from the lungs to the farthest areas of the body. "

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.hiv ? "primary" :"secondary"}
              variant="contained"
              onClick={handleChange2('hiv')}
            >
            HIV / AIDS 
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title="HIV (human immunodeficiency virus) is a virus that attacks cells that help the body fight infection, making a person more vulnerable to other infections and diseases.If HIV is not treated, it can lead to AIDS (acquired immunodeficiency syndrome)."

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <div className="lite-btn">
            <Button
              color={values.none_of_them ? "primary" :"secondary"}
              variant="contained"
              onClick={()=>handleNone()}
            >
            None of them 
            <Tooltip disableFocusListener 
              TransitionComponent={Zoom}
              arrow
              title="You have no history in any of the above medical problems.  "

            >
            <span><i className='fa fa-info-circle' /></span>
            </Tooltip>
            </Button>
            </div>
            <br />
            <br />
            <br />
            <br />
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
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue1}
              >
                Continue
              </Button>
            </div>
      </Container>
    );
  }
}

export default LiteMedicalDetails;