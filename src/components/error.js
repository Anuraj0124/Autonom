export default function validateInfo(values) {
  let errors = {};

  if (values.aadhaar.length<10){
    errors.aadhaar = 'Aadhaar invalid';
  }
  if (values.children<10 && values.children>0 ) {
    errors.children = 'Children Number incorrect';
  } 
  if (values.age<121 && values.age>0 ) {
    errors.age = 'Age incorrect';
  } 
  if (values.comaScore<16 && values.comaScore>0 ) {
    errors.comaScore = 'Coma Score incorrect';
  } 
  if (values.diuresis>0 ) {
    errors.diuresis = 'Diuresis Score incorrect';
  } 
  if (values.platelets>0 ) {
    errors.platelets = 'Platelets Score incorrect';
  } 
  if (values.hbb>0 ) {
    errors.hbb = 'HBB Score incorrect';
  } 
  if (values.ddimer>0 ) {
    errors.ddimer = 'D-dimer Score incorrect';
  } 
  if (values.heartRate>0 ) {
    errors.heartRate = 'Heart Rate incorrect';
  } 
  if (values.hdlCholestrol>0 ) {
    errors.hdlCholestrol = 'HDL Cholestrol Levelincorrect';
  } 
  if (values.bloodGlucose>0 ) {
    errors.bloodGlucose = 'Blood Glucose Level incorrect';
  } 
  if (values.ftmonth>0 ) {
    errors.ftmonth = 'Foriegn trips count incorrect';
  } 
  if (values.charlsonIndex<16 && values.charlsonIndex>0 ) {
    errors.charlsonIndex = 'Charlson Index incorrect';
  } 
  
  return errors;
}