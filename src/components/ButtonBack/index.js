import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const BottonBack = () => {
  return (
    <Row className='mb-3'>
      <Col>
        <Link to='/'>
          <Button color='secondary'>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
  )
}

export default BottonBack
