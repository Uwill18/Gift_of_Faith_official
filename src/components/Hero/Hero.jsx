import React from 'react';
import"./Hero.css";
import CountUp from 'react-countup';



const Hero = () => {
  return (
   <section className='hero-wrapper'>

<div className="paddings innerWidth flexCenter">
<h1><em>A Spirit of excellency</em> <br/><em>equals excellent products!</em><br/></h1>
                {/* <h1><em>A Spirit of excellency</em> <br/><em>equals excellent products!</em><br/></h1> */}
            </div>
    <div className="paddings innerWidth flexCenter hero-container">
     {/* left side */}
        <div className="flexColStart hero-left">


                          {/* right side */}
                          <div className="">
            <div className="image-container">
                <img src="./UMC3.jpg" alt=""/>
            </div>
        </div>




    </div>

    <div className='hero-des-container flexCenter hero-right'>
    <div className=" hero-des">
            <span>Gift of Faith Consultants is a distinguished Civil and Structural
Engineering consultancy that specializes in the research, design, supervision,
management, and commissioning of Civil and Structural Engineering projects. </span>
        </div>
        <div className="flexCenter stats">
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={88000} end={90000} duration={4}/> 
                    <span>+</span>
                    </span>
                    <span className='secondaryText'>Premium Products</span>
            </div>

            <div className="flexColCenter stat">
                <span>
                    <CountUp start={1950} end={1999} duration={4}/> 
                    <span>+</span>
                    </span>
                    <span className='secondaryText'>Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
                <span>
                    <CountUp end={28} duration={4}/> 
                    <span>+</span>
                    </span>
                    <span className='secondaryText'>Award Winning</span>
                </div>

            <div/>
          </div>
        </div>

        

    </div>
   </section>
  )
}

export default Hero;