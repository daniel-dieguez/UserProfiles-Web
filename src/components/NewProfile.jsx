import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import NewCart from '../utils/NewCart'

export default function NewProfile() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <NewCart></NewCart>
          </Col>
        </Row>
      </Container>
    
    </div>
  )
}
