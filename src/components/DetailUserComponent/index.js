import React from 'react'
import { Table, Spinner } from 'reactstrap'
import { connect } from 'react-redux'
import './style.css'

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail,
    errorUsersDetail: state.users.errorUsersDetail
  }
}

const DetailUser = (props) => {
  return (
    <Table striped>
      {
        props.getUsersDetail ? (
          <tbody>
            <tr>
              <td width='200'>Name</td>
              <td width='10'>:</td>
              <td>{props.getUsersDetail.name}</td>
            </tr>
            <tr>
              <td width='200'>Alamat</td>
              <td width='10'>:</td>
              <td>{props.getUsersDetail.alamat}</td>
            </tr>
            <tr>
              <td width='200'>Umur</td>
              <td width='10'>:</td>
              <td>{props.getUsersDetail.umur}</td>
            </tr>
            <tr>
              <td width='200'>Nomer HP</td>
              <td width='10'>:</td>
              <td>{props.getUsersDetail.nohp}</td>
            </tr>
          </tbody>
        ) : <div className='text-center'><Spinner color='dark' /></div>
      }
    </Table>
  )
}

export default connect(mapStateToProps, null)(DetailUser)
