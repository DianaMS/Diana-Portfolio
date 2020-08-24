import React from 'react';
import '../assets/styles/components/Item.scss';

const Item = ({ img, title, description, buttonleft, buttonright }) => (
  <>
    <div className='containerItem'>
      <section className='image-content'>
        <img src={img} alt='' />
      </section>
      <section className='description-content'>
        <div className='general-description'>
          <p>{title}</p>
          <p>{description}</p>
        </div>
        <div className='routes'>
          <button type='button'>{buttonleft}</button>
          <button type='button'>{buttonright}</button>
        </div>
      </section>
    </div>
  </>
);

export default Item;
