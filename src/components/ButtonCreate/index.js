import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default class ButtonCreate extends Component {
  render () {
    return (
      <div>
        <Link to='/create'>
          <Button color='success'>
            <FontAwesomeIcon icon={faUser} /> Create User
          </Button>
        </Link>
      </div>
    )
  }
}
