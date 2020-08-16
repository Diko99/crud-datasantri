import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { UsersValidation } from '../../validations'
import { Row, Col, Label, Input, FormGroup, Button } from 'reactstrap'

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning }
}) => (
  <Row>
    <Col md='12'>
      <Label htmlFor='{input}' className='col-form-label'>
        {label}
      </Label>
    </Col>
    <Col md='12'>
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      />
      {touched &&
        (
          (error && <p style={{ color: 'red' }}>{error}</p>) ||
          (warning && <p style={{ color: 'brown' }}>{warning}</p>)
        )}
    </Col>
  </Row>
)

const mapStateToProps = (state) => {
  return {
    initialValues: {
      name: state.users.getUsersDetail.name,
      umur: state.users.getUsersDetail.umur,
      alamat: state.users.getUsersDetail.alamat,
      nohp: state.users.getUsersDetail.nohp
    }
  }
}

class FormComponent extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type='text'
                name='name'
                component={renderField}
                label='Nama :'
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type='text'
                name='alamat'
                component={renderField}
                label='Alamat :'
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type='text'
                name='nohp'
                component={renderField}
                label='Nomor HP :'
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type='text'
                name='umur'
                component={renderField}
                label='Umur :'
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md='12'>
            <Button
              color='dark'
              type='submit'
              disabled={this.props.submitting}
            >
              Submit
            </Button>
          </Col>
        </FormGroup>
      </form>
    )
  }
}

FormComponent = reduxForm({
  form: 'formCreateUser',
  validate: UsersValidation,
  enableReinitialize: true
})(FormComponent)

export default connect(mapStateToProps, null)(FormComponent)
