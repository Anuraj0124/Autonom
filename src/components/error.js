export default function validateInfo(values) {
  let errors = {};

  errors.peopleId = (values.peopleId.length==12 && parseInt(values.peopleId)>0 && Math.sign(values.peopleId)!==NaN && Math.sign(values.peopleId)>-1);
  errors.children = parseInt(values.children)<10 && parseInt(values.children)>=0;
  errors.age = parseInt(values.age)<121 && parseInt(values.age)>0 ;
  errors.comaScore = parseInt(values.comaScore)<16 && parseInt(values.comaScore)>0 
  errors.diuresis = parseInt(values.diuresis)>=0; 
  errors.platelets = parseInt(values.platelets)>=0;
  errors.hbb = parseInt(values.hbb)>=0;
  errors.ddimer = parseInt(values.ddimer)>=0;
  errors.heartRate = parseInt(values.heartRate)>=0 ; 
  errors.hdlCholesterol = parseInt(values.hdlCholesterol)>=0; 
  errors.charlsonIndex = parseInt(values.charlsonIndex)<41 && parseInt(values.charlsonIndex)>=0; 
  errors.bloodGlucose = parseInt(values.bloodGlucose)>=0 ; 
  errors.ftmonth = parseInt(values.ftmonth)>=0;
  
  return errors;
}