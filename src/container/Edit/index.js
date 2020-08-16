import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { ButtonBack, FormComponent } from '../../components'

export default class EditComponent extends Component {
  componentDidMount (data) {
    console.log(data)
  }

  render () {
    return (
      <Container>
        <ButtonBack />
        <h1>Edit data santri</h1>
        <FormComponent />
      </Container>
    )
  }
}
