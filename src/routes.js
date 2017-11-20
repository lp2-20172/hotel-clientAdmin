import React from 'react'
//import loadable from 'loadable-components';

import HabitacionList from './components/habitacion/List'
import HabitacionForm from './components/habitacion/Form'

import { RouteWithSubRoutes } from './node_m/react-router-dom-ext'

////




const Tacos = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
)

const routes = [
  {
    path: '/catalogo',
    //title: 'catalogo!',
    component: Tacos,
    routes: [
      {
        path: '/catalogo/habitaciones',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/habitaciones/list',
            //title: 'list cat!',
            component: HabitacionList
          },
          {
            path: '/catalogo/habitaciones/new',
            //title: 'new cat!',
            component: HabitacionForm
          },
          {
            path: '/catalogo/habitaciones/edit/:id',
            //title: 'edit cat!',
            component: HabitacionForm
          }
        ]
      }
    ]
  }
]

export { routes }






/*
//import { Redirect } from 'react-router'
import {
  Route,
  Redirect

} from 'react-router-dom'
class Tacos2x extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
    props.history.push(props.routes[0].path)

  }
  componentWillMount = () => {

   // this.props.history.push('/categorias/list/list')

  }
  componentDidMount = () => {

    this.setState({
      redirect: true,
    })
  }
  handleClick = () => {
    if (this.state.redirect) {
      this.props.history.push(this.props.routes[0].path)
    }
  }

  render() {
    //console.log(JSON.stringify(this.props))
    const { routes, history } = this.props
    //console.log(JSON.stringify(routes[0].path))
    //history.push('/categorias/list/list');
    //console.log(JSON.stringify(this.state.redirect))
    
       // if (this.state.redirect) {
    
         // this.props.history.push('/categorias/list/list')
    
        //} 
    
    return (
      <div>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        
        <button onClick={this.handleClick}>
                        Volver
                    </button>
      </div>
    )
    
  }

}

const Tacos2p = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
    

  </div>
)
*/