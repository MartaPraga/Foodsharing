import React from 'react';
import './Logo.scss';

export function Logo() {
  return (
    <h2 className="logo"><a href='/src/pages/Home/Home.js'>
      <span className="logo__first-part">Food</span>
      sharing
      </a>
    </h2>
  );
}
