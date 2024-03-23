import { React } from 'react';
import './About.css';
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css"
import data from '../../utils/services_accordion_data'

import {MdOutlineArrowDropDown} from 'react-icons/md';



const About = () => {
  return (
<div className='about_section' id="about">

<div className="about-card-row">
<div className='about_title'>
 About
  </div>
  <div className="about_container">
  <div className="about_column about_column_mobile history_column">
    <h2 className='column-header'>History</h2>
    <p className='description'>Founded in 2006, Gift of Faith Consultants is a Civil and Structural Engineering Consultancy which researches, designs, supervises, manages and commissions Civil and Structural Engineering projects. Gift of Faith Consultants was registered in December 2006 as Gift of Faith Enterprises (Pvt.) Ltd. The company’s shareholders are Engineer Kudzanai Nyikayaramba and Choice Nyikayaramba.

The Principal Officers in Gift of Faith Consultants are Registered Fellow Members of the Zimbabwe Institute of Engineers (ZIE), The Engineering Council of Zimbabwe (ECZ) as well as Zimbabwe Association of Consulting Engineers (ZACE).The composition of the consultancy brings together skills and experience in Civil Engineering, Structural Engineering as well as Project Planning and Management.</p>
  </div>
  <div className=" about_column about_column_mobile mission_column">
    <h2 className='column-header'>Mission</h2>
    <p className='description'>Gift of Faith Consultants knows that success is determined by a mindset of commitment to delivering excellence, and we have reaped the fruits of that mindset as one of the most successful firms in our type of business today.We also deeply believe that there is no limit to excellence, which is why we provide excellent service to each one of our clients on the individual, corporate and governmental levels. Lastly, we are flexible in our aim to understand the nature of our clients’ challenges, which in turn builds mutual and long lasting relationships. 


Gift of Faith Consultants’ mission is to demonstrate how much we care by going the extra mile to provide quality client-oriented service. This is achieved through consistency, integrity, professional service and also by:
</p>
  </div>
  <div className="about_column about_column_mobile services_column">
    <h2 className='column-header'>Services</h2>
    <p className='description'>We serve diverse clients: developers, pension funds, insurers, businesses, governments, as well as multi-story and single-story residential areas. Our civil engineering services cover feasibility studies, sewerage design, water treatment, road design, and supervision. In structural engineering, we specialize in high-rise buildings, malls, industrial structures, bridges, stadiums, water tanks, and more.
     </p>
  </div>
  </div>

</div>
</div>
  )
}

export default About