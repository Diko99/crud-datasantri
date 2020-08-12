import React, { Component } from 'react'
import { ButtonBack } from '../../components'
import { Container } from 'reactstrap'

export default class CreateComponent extends Component {
  render () {
    return (
      <Container>
        <ButtonBack />
        <h1>CreateComponent</h1>
      </Container>
    )
  }
}
