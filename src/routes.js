import React from 'react'
//import loadable from 'loadable-components';

import HabitacionList from './components/habitacion/List'
import HabitacionForm from './components/habitacion/Form'
import ClienteList from './components/cliente/List'
import ClienteForm from './components/cliente/Form'
import AreaList from './components/area/List'
import AreaForm from './components/area/Form'

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
      },
      {
        path: '/catalogo/clientes',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/clientes/list',
            //title: 'list cat!',
            component: ClienteList
          },
          {
            path: '/catalogo/clientes/new',
            //title: 'new cat!',
            component: ClienteForm
          },
          {
            path: '/catalogo/clientes/edit/:id',
            //title: 'edit cat!',
            component: ClienteForm
          }
        ]
      },
      {
        path: '/catalogo/areas',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/areas/list',
            //title: 'list cat!',
            component: AreaList
          },
          {
            path: '/catalogo/areas/new',
            //title: 'new cat!',
            component: AreaForm
          },
          {
            path: '/catalogo/areas/edit/:id',
            //title: 'edit cat!',
            component: AreaForm
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
