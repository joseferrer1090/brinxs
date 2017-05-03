import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import NavBar from './../Sections/NavBar'
import LeftNavBar from './../Sections/LeftNavBar'
import BreadCumb from './../Sections/BreadCumb'

export default class Home extends Component {
  render(){
    return(
      <div>
        <NavBar/>
        <LeftNavBar/>
          <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div className="row">
              
            </div>
          </div>
      </div>
    )
  }
}
