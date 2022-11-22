import React from 'react';
import './Features.scss'

export function Features() {
  return (
    <div className="Feature section">
      <div className="Feature__item Feature__first">
        <div>
          <img  className="Feature__image" src="/images/groceries.png" alt='bag with food' />
          <h2>32</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="Feature__item Feature__second">
      <img className="Feature__image" src="/images/family.png" alt='family icon' />
          <h2>1.5 mln</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="Feature__item Feature__third">
      <img className="Feature__image" src="/images/hand_with_heart.png" alt='' />
          <h2>50000</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  );
}
