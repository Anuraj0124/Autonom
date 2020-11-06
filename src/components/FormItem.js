import React from 'react';
import './FormItem.css';
import { Link } from 'react-router-dom';

function FormItem({
  placeholder,
  lightBg,
  lightText,
  lightTextDesc,
  description1,
  buttonLabel,
  imgStart,
  InputText,
  dropdown
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >

        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
            <div class="form__group field">
            {dropdown 
              ?
                <>
                  <select id="items">
                    <option value="uhhkh">Item 1</option>
                    <option value="item-2">Item 2</option>
                    <option value="item-3">Item 3</option>
                    <option value="item-4">Item 4</option>
                  </select>
                </>

              :
                <>
                <input type="input" class="form__field" placeholder={InputText} name="name" id='name' required />
                <label for="name" class="form__label">{InputText}</label>
                </>
                

            }
             </div>
            </div>

        
            <div className='col1'>
              <div className='home__hero-text-wrapper'>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {InputText}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description1}<br /><br />
                  
                </p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default FormItem;
