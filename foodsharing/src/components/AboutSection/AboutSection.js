import React from 'react';
import './AboutSection.scss';

export function AboutSection() {
  return (
    <div className="AboutSection section">
      <div className='AboutSection__container'>
        <div className="AboutSection__content">
          <h2 className="AboutSection__content__title">What is foodsharing?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            doloremque possimus reiciendis eligendi, provident quisquam maxime
            corporis sequi suscipit fuga mollitia nostrum ratione tenetur
            temporibus alias, expedita nihil sunt exercitationem!
          </p>
        </div>
        <div className="AboutSection__video">
          <iframe
            width="790"
            height="444"
            src="https://www.youtube.com/embed/qbVYhBWieMk"
            title="Foodsharing Copenhagen (English Version)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
