import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { ButtonBack } from '../../components'

export default class DetailComponent extends Component {
  render () {
    return (
      <Container>
        <ButtonBack />
        <h1>DetailComponent</h1>
      </Container>
    )
  }
}
