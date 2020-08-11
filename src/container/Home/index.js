import React, { Component } from 'react'
import { TableComponent } from '../../components'

export default class HomeComponent extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'afif',
        alamat: 'pekalongan',
        nohp: '08241241109'
      },
      {
        id: 2,
        name: 'diko',
        alamat: 'jogjakarta',
        nohp: '08241241102'
      },
      {
        id: 3,
        name: 'habib',
        alamat: 'magelang',
        nohp: '08241241102'
      }
    ]
  }

  render () {
    const { users } = this.state
    return (
      <div>
        <TableComponent users={users} />
      </div>
    )
  }
}
