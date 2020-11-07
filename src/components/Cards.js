import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>For More Information!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='/Autonom/images/img-3.jpg'
              text='Our Research Publication'
              label='Research Paper'
              path='https://www.medrxiv.org/content/10.1101/2020.10.09.20165431v2'
            />
            <CardItem
              src='/Autonom/images/img-2.jpg'
              text='Our App'
              label='Third Eye'
              path='/'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
