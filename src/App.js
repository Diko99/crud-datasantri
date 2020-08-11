import React, { Component } from 'react'
import { JumbotronComponent, NavbarComponent } from './components'
import { BrowserRouter, Route } from 'react-router-dom'
import { DetailComponent, EditComponent, HomeComponent, CreateComponent } from './container'

export default class App extends Component {
  render () {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path='/' exact>
            <HomeComponent />
          </Route>
          <Route path='/create' exact>
            <CreateComponent />
          </Route>
          <Route path='/edit/:id' exact>
            <EditComponent />
          </Route>
          <Route path='/detail/:id' exact>
            <DetailComponent />
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}
