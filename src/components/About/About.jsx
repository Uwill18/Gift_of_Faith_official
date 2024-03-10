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
<div className='about_section'>
  <span className="abouttitle">
  <h1>About</h1>
  </span>
<div className="card-row">
  <div className="history_column">
    <h2>Column 1</h2>
    <p className='description'>Founded in 2006, Gift of Faith Consultants is a Civil and Structural Engineering Consultancy which researches, designs, supervises, manages and commissions Civil and Structural Engineering projects. Gift of Faith Consultants was registered in December 2006 as Gift of Faith Enterprises (Pvt.) Ltd. The company’s shareholders are Engineer Kudzanai Nyikayaramba and Choice Nyikayaramba.

The Principal Officers in Gift of Faith Consultants are Registered Fellow Members of the Zimbabwe Institute of Engineers (ZIE), The Engineering Council of Zimbabwe (ECZ) as well as Zimbabwe Association of Consulting Engineers (ZACE).The composition of the consultancy brings together skills and experience in Civil Engineering, Structural Engineering as well as Project Planning and Management.</p>
  </div>
  <div className="mission_column">
    <h2>Column 2</h2>
    <p className='description'>Gift of Faith Consultants knows that success is determined by a mindset of commitment to delivering excellence, and we have reaped the fruits of that mindset as one of the most successful firms in our type of business today.We also deeply believe that there is no limit to excellence, which is why we provide excellent service to each one of our clients on the individual, corporate and governmental levels. Lastly, we are flexible in our aim to understand the nature of our clients’ challenges, which in turn builds mutual and long lasting relationships. 


Gift of Faith Consultants’ mission is to demonstrate how much we care by going the extra mile to provide quality client-oriented service. This is achieved through consistency, integrity, professional service and also by:

	Establishing successful relationships with all clients to anticipate and satisfy their expectations to the best of our ability.

We provide our clients with excellent services at a reasonable fee ensuring that we attain controlled growth within Zimbabwe and the SADC region. We acknowledge our staff as our number one resource and reward excellent performance. Our service is technologically driven towards the latest design packages. We are aware of our social responsibility and empathize with the needs of our clients.


	Being clear, open and timely in communicating with our clients.

Our company offers prompt and professional consulting services to any property developer. The contracts we offer are flexible to suit our client’s needs be it private individuals or corporate clients.


	Providing proactive solutions to our client’s problems.

We provide various engineering solutions and optimized designs for each project to produce  economically favorable results. In view of the above it is our considered view to employ committed and experienced personnel to undertake various projects.</p>
  </div>
  <div className="services_column">
    <h2>Column 3</h2>
    <p className='description'>We serve diverse clients: developers, pension funds, insurers, businesses, governments. Our civil engineering services cover feasibility studies, sewerage design, water treatment, road design, and supervision. In structural engineering, we specialize in high-rise buildings, malls, industrial structures, bridges, stadiums, water tanks, and more.</p>
  </div>
</div>
</div>
  )
}

export default About