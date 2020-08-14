import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { ButtonBack, DetailUser } from '../../components'
import { connect } from 'react-redux'
import { getUsersDetail } from '../../actions/userAction'

class DetailComponent extends Component {
  componentDidMount () {
    this.props.dispatch(getUsersDetail(this.props.match.params.id))
  }

  render () {
    return (
      <Container>
        <ButtonBack />
        <DetailUser />
      </Container>
    )
  }
}

export default connect()(DetailComponent)