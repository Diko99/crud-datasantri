import React, { Component } from 'react'
import { TableComponent } from '../../components'
import { connect } from 'react-redux'
import { getUsersList } from '../../actions/userAction'

class HomeComponent extends Component {
  componentDidMount () {
    this.props.dispatch(getUsersList())
  }

  render () {
    return (
      <div>
        <TableComponent />
      </div>
    )
  }
}
export default connect()(HomeComponent)
