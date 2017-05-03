import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import NavBar from './../../Sections/NavBar'
import LeftNavBar from './../../Sections/LeftNavBar'

export default class Home extends Component {
  render(){

    return(
      <div>
        <NavBar/>
        <LeftNavBar/>

          <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main" style={{border: ''}}>
            <div className="row">
              <ol className="breadcrumb">
                <li><a href="#"><svg className="glyph stroked home"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#stroked-home"></use></svg></a></li>
                <li className="active">Incio</li>
              </ol>
            </div>
          </div>

      </div>
    )
  }
}
