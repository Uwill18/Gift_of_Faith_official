import React from 'react'
//try to iterate like residencies
import './ProjectTypes.css'
import data from '../../../utils/image-gallery.json'

const ProjectTypes = () => {
  return (
    <div className='project-background'>
    <div className="two-columns">
    <div>1</div>
    <div>2</div>

    {data.map((card, i)=>(
        <div>

<div className='flexRowStart two-columns'>
<div key={i%2==0}>
                            
                            <div className="flexColStart  r-card">
                                <img src={card.image} alt="Building Project" height={200} />
                                <span className="secondaryText r-price">
                                    <span style={{color:"orange"}}>$</span>
                                    <span>{card.price}</span>
                                    </span>
                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                            </div>  
                        </div>
                        <br/>
                        <div key={i%2==1}>
                            
                            <div className="flexColStart  r-card">
                                <img src={card.image} alt="Building Project" height={200} />
                                <span className="secondaryText r-price">
                                    <span style={{color:"orange"}}>$</span>
                                    <span>{card.price}</span>
                                    </span>
                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                            </div>  
                        </div>
                                
                                </div>
     
        </div>
                        
                        
                        
                ))}
    </div>
</div>
  )
}

export default ProjectTypes