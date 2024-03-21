import React from 'react'
import './Team.css'
// Import all of Bootstrap's CSS
import * as bootstrap from 'bootstrap'

const Team = () => {
  return (
    <div id="team">
      <span className="teamname">
         <h1>Meet the Team!</h1>
      </span>
      <div className="mega-container">
      <div className='super-container'>
      <div className="card-row">
      <div className="image-section">
            <img className="card-img-top" src="./businesswoman.jpeg" alt="" />
          </div>
      <div className="container-a">
      <div className="text-section">
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
        </div>
       </div>
      </div>
      <br/>
      <br/>

      <div className='super-container-b' id='col-rev'>
      <div className="card-row">
      <div className="image-section-c">
      <div className="text-section">
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
        </div>
      <div className="container-b">
      
      <img className="card-img-top" src="./businesswoman.jpeg" alt="" />
        </div>
        
       </div>
       
      </div>
      <br/>
      <br/>

      </div>


      {/* <div className='super-container'>
      <div className="card-row">
      <div className="image-section">
            <img className="card-img-top" src="./businesswoman.jpeg" alt="" />
          </div>
      <div className="container-a">
      <div className="text-section">
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
        </div>
       </div>
      </div>
      <br/>
      <br/>

      <div className='super-container'>
      <div className="card-row">
      <div className="image-section-c">
      <div className="text-section">
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
        </div>
      <div className="container-b">
      <div className="text-section">
      <img className="card-img-top" src="./businesswoman.jpeg" alt="" />
        </div>
        </div>
       </div>
       
      </div>
      <br/>
      <br/> */}


    </div> 
    
  )
}

export default Team