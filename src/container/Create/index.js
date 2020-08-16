import React, { Component } from 'react'
import { ButtonBack, FormComponent } from '../../components'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import { postUserCreate } from '../../actions/userAction'
import swal from 'sweetalert'

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser
  }
}

class CreateComponent extends Component {
  handleSubmit (data) {
    this.props.dispatch(postUserCreate(data))
  }

  render () {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      this.props.errorResponDataUser
        ? swal('Failed!', this.props.errorResponDataUser, 'error')
        : swal('Success Created', 'create new data santr', 'success')
    }
    return (  
      <Container>
        <ButtonBack />
        <h1>Tambah santri baru</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    )
  }
}

export default connect(mapStateToProps, null)(CreateComponent)
