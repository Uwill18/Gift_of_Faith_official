import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-body'>
      {/* <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="" action=""></form> */}
        <Container >
          <Row className='mb-5 mt-3'>
            <Col lg='8'>
              <h1 className='display-4 mb-4 mt-5'>
                Contact Us
              </h1>
            </Col>
          </Row>
          <Row className='sec_sp'>
            <Col lg='5' className='mb-5'>
              <h3 className='color_sec py-4'>Get in touch</h3>
            <address>
              <strong>
                Email : gof.engineers@gmail.com
              </strong>
              <br/>
              <br/>
              <p>
                <strong>Phone: 0773794413 </strong>
              </p>
            </address>
            <p>Our office hours are Monday through Friday, 9:00 AM to 5:00 PM (EST). We strive to respond to all inquiries within 24 hours during regular business days.
Thank you for your interest in contacting us! We look forward to assisting you.</p>
            </Col>
            <Col lg='7' className='d-flex align-items-center'>
              <form className='contact__form w-100'>
                <Row>
                  <Col lg='6' className='form-group'>
                    <input
                      className='form-control'
                      id="name"
                      name="name"
                      placeholder='Name'
                      type="text"
                    />
                  </Col>
                  <Col lg='6' className='form-group'>
                    <input
                      className='form-control rounded-0'
                      id="email"
                      name="email"
                      placeholder='Email'
                      type="email"
                    />
                  </Col>
                </Row>
                <textarea className='form-control rounded-0' 
                          id="message"
                          name="message"
                          placeholder='Message'
                          rows='5'>
                </textarea>
                <br/>
                <Row>
                  <Col lg='12' className='form-group'>
                    <button className='btn ac_btn' type="submit">
                      Send
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Contact