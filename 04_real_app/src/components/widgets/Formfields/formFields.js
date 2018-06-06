import React from 'react';
import styles from './formFields.css'

const FormField = ({id,formdata,change}) => {
  const showError = ()=>{
    let err = null;
    if(formdata.validation && !formdata.valid){
      err = (
        <div className={styles.labelError}>
          {formdata.validationMessage}
        </div>
      )
      
    }
    return err
  }
  const renderTemplate = ()=>{
    let formTemplate = null;
    switch(formdata.element){
      case('input'):
      formTemplate=(<div>
        <input 
          {...formdata.config} 
          value={formdata.value}
          onBlur={event=>change({event,id,blur:true})}
          onChange={event=>change({event,id,blur:false})}/>
        {showError()}
      </div>)
      break;
      default:
      formTemplate=null;
    }
    return formTemplate
  }
  return (
    <div>
      {renderTemplate()}
    </div>
  );
};

export default FormField;