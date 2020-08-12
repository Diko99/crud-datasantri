import React from 'react'
import { Container, Button, Col, Row } from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { Link } from 'react-router-dom'
import { ButtonCreate } from '../'
import { connect } from 'react-redux'

const { SearchBar } = Search

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
}

const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Name',
  sort: true
}, {
  dataField: 'alamat',
  text: 'Alamat',
  sort: true
}, {
  dataField: 'link',
  text: 'Action',
  formatter: (rowContent, row) => {
    return (
      <div>
        <Link to={'/detail/' + row.id}>
          <Button color='primary' className='mr-2' size='sm'>
            <FontAwesomeIcon icon={faInfo} /> Detail
          </Button>
        </Link>
        <Link to={'edit/' + row.id}>
          <Button color='warning' className='mr-2' size='sm'>
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Button>
        </Link>
        <Button color='danger' className='mr-2' size='sm'>
          <FontAwesomeIcon icon={faTrash} /> Delete
        </Button>
      </div>
    )
  }
}
]

const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}]

const TableComponent = ({ users }) => {
  return (
    <Container>
      <ToolkitProvider
        bootstrap4
        keyField='id'
        data={users}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {
          props => (
            <div>
              <Row className='mb-3'>
                <Col><ButtonCreate /></Col>
                <Col>
                  <div className='float-right'>
                    <SearchBar {...props.searchProps} placeholder='cari santri' />
                  </div>
                </Col>
              </Row>
              <BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
            </div>
          )
        }
      </ToolkitProvider>
    </Container>
  )
}

export default connect(mapStateToProps, null)(TableComponent)

TableComponent.propTypes = {
  users: PropTypes.array,
  searchProps: PropTypes.string,
  baseProps: PropTypes.string
}
