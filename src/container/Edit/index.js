import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { ButtonBack } from '../../components'

export default class EditComponent extends Component {
  render () {
    return (
      <Container>
        <ButtonBack />
        <h1>EditComponent</h1>
      </Container>
    )
  }
}
