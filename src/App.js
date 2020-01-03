import React, { Component } from 'react'
import './App.css'
import Upload from './upload/Upload'
import { MenuList, MenuItem } from '@material-ui/core'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='MenuList'>
          <Router>
            <MenuList>
            <MenuItem component={Link} to='/' className='MenuItem'>
                Home
              </MenuItem>
              <MenuItem component={Link} to='/import' className='MenuItem'>
                Import
              </MenuItem>
              <MenuItem component={Link} to='/export' className='MenuItem'>
                Export
              </MenuItem>
            </MenuList>
            <Route path="/">
                <div className='Card'>
                  
                </div>
              </Route>
            <Switch>
              <Route path="/import">
                
                  <Upload />
          
              </Route>
              <Route path="/export">
                ciao

              </Route>
            </Switch>
          </Router>
        </div>


       {/*  <div className="Card">
          <Upload />
        </div> */}
      </div> 
    )
  }
}

export default App