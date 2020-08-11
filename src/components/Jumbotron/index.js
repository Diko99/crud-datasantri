import React from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className='display-5'>Data santri <span className='text-warning'> qodr.or.id </span></h1>
          <p className='lead text-secondary'>Berikut ini merupakan daftar dari santri qodr HQ dan juga qodr Magelang</p>
          <Button color='primary'>
            <FontAwesomeIcon icon={faInfo} />{' '}
            Learn More
          </Button>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default JumbotronComponent
