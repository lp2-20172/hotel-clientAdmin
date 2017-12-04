import React from 'react'
//import loadable from 'loadable-components';

import HabitacionList from './components/habitacion/List'
import HabitacionForm from './components/habitacion/Form'
import ClienteList from './components/cliente/List'
import ClienteForm from './components/cliente/Form'
import AreaList from './components/area/List'
import AreaForm from './components/area/Form'
import PagoList from './components/pago/List'
import PagoForm from './components/pago/Form'
import TrabajadorList from './components/trabajador/List'
import TrabajadorForm from './components/trabajador/Form'
import VentaList from './components/venta/List'
import VentaForm from './components/venta/Form'
import ReservaList from './components/reserva/List'
import ReservaForm from './components/reserva/Form'

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
      },
      {
        path: '/catalogo/pagos',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/pagos/list',
            //title: 'list cat!',
            component: PagoList
          },
          {
            path: '/catalogo/pagos/new',
            //title: 'new cat!',
            component: PagoForm
          },
          {
            path: '/catalogo/pagos/edit/:id',
            //title: 'edit cat!',
            component: PagoForm
          }
        ]
      },
      {
        path: '/catalogo/trabajadores',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/trabajadores/list',
            //title: 'list cat!',
            component: TrabajadorList
          },
          {
            path: '/catalogo/trabajadores/new',
            //title: 'new cat!',
            component: TrabajadorForm
          },
          {
            path: '/catalogo/trabajadores/edit/:id',
            //title: 'edit cat!',
            component: TrabajadorForm
          }
        ]
      },
      {
        path: '/catalogo/ventas',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/ventas/list',
            //title: 'list cat!',
            component: VentaList
          },
          {
            path: '/catalogo/ventas/new',
            //title: 'new cat!',
            component: VentaForm
          },
          {
            path: '/catalogo/ventas/edit/:id',
            //title: 'edit cat!',
            component: VentaForm
          }
        ]
      },
      {
        path: '/catalogo/reservas',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/reservas/list',
            //title: 'list cat!',
            component: ReservaList
          },
          {
            path: '/catalogo/reservas/new',
            //title: 'new cat!',
            component: ReservaForm
          },
          {
            path: '/catalogo/reservas/edit/:id',
            //title: 'edit cat!',
            component: ReservaForm
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
