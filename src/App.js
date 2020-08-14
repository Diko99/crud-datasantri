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
          <Route path='/' exact component={HomeComponent} />
          <Route path='/create' exact component={CreateComponent} />
          <Route path='/edit/:id' exact component={EditComponent} />
          <Route path='/detail/:id' exact component={DetailComponent} />
        </BrowserRouter>
      </div>
    )
  }
}
