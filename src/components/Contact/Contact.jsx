import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
      {/* <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="" action=""></form> */}
        <Container>
          <Row className='mb-5 mt-3'>
            <Col lg='8'>
              <h1 className='display-4 mb-4'>
                Contact Us
              </h1>
            </Col>
          </Row>
          <Row className='sec_sp'>
            <Col lg='5' className='mb-5'>
              <h3 className='color_sec py-4'>Get in touch</h3>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Contact