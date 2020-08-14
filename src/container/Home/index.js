import React, { Component } from 'react'
import { TableComponent } from '../../components'
import { connect } from 'react-redux'
import { getUsersList, deleteUsersDetail } from '../../actions/userAction'

class HomeComponent extends Component {
  componentDidMount () {
    this.props.dispatch(getUsersList())
    this.props.dispatch(deleteUsersDetail())
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
