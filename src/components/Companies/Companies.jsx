import React from 'react';
import './Companies.css';

const Companies = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          <div className='img_background'><img src="./UMC_logo.png" alt="UMC Church" /></div>
            
            <img src="./OKmart-Logo_Transparent.png" alt="OkMart Mall"/>
            <div className='img_background'><img src="./ecobank_logo.png" alt="EcoBank Pan African Bank" /></div>
            <div className='img_background'><img src="./Gain_logo.png" alt="Gain Masvingo Mall" /></div>
            <img src="./Zaoga_logo.png" alt="Zaogo Church" />
            
        </div>
    </section>
  )
}

export default Companies