
const menus = [
  {
    path: '/catalogo',
    title: 'catalogo!',
    icon: 'list',
    routes: [
      {
        path: '/catalogo/habitaciones',
        title: 'habitaciones!',
        replace: '/catalogo/habitaciones/list',
        icon: 'usb',
        routes: [
          {
            path: '/catalogo/habitaciones/list',
            title: 'list Hab!',
          },
          {
            path: '/catalogo/habitaciones/new',
            title: 'new Hab!',
          },
          {
            path: '/catalogo/habitaciones/edit/:id',
            title: 'edit Hab!',
          }
        ]

      },
      {
        path: '/catalogo/clientes',
        title: 'clientes!',
        replace: '/catalogo/clientes/list',
        icon: 'usb',
        routes: [
          {
            path: '/catalogo/clientes/list',
            title: 'list Hab!',
          },
          {
            path: '/catalogo/clientes/new',
            title: 'new Hab!',
          },
          {
            path: '/catalogo/clientes/edit/:id',
            title: 'edit Hab!',
          }
        ]

      },
      {
        path: '/catalogo/areas',
        title: 'areas!',
        replace: '/catalogo/areas/list',
        icon: 'usb',
        routes: [
          {
            path: '/catalogo/areas/list',
            title: 'list Hab!',
          },
          {
            path: '/catalogo/areas/new',
            title: 'new Hab!',
          },
          {
            path: '/catalogo/areas/edit/:id',
            title: 'edit Hab!',
          }
        ]

      },
      {
        path: '/catalogo/pagos',
        title: 'pagos!',
        replace: '/catalogo/pagos/list',
        icon: 'usb',
        routes: [
          {
            path: '/catalogo/pagos/list',
            title: 'list Hab!',
          },
          {
            path: '/catalogo/pagos/new',
            title: 'new Hab!',
          },
          {
            path: '/catalogo/pagos/edit/:id',
            title: 'edit Hab!',
          }
        ]

      },
      {
        path: '/catalogo/trabajadores',
        title: 'trabajadores!',
        replace: '/catalogo/trabajadores/list',
        icon: 'usb',
        routes: [
          {
            path: '/catalogo/trabajadores/list',
            title: 'list Hab!',
          },
          {
            path: '/catalogo/trabajadores/new',
            title: 'new Hab!',
          },
          {
            path: '/catalogo/trabajadores/edit/:id',
            title: 'edit Hab!',
          }
        ]

      },
      {
        path: '/catalogo/ventas',
        title: 'ventas!',
        replace: '/catalogo/ventas/list',
        icon: 'usb',
        routes: [
          {
            path: '/catalogo/ventas/list',
            title: 'list Hab!',
          },
          {
            path: '/catalogo/ventas/new',
            title: 'new Hab!',
          },
          {
            path: '/catalogo/ventas/edit/:id',
            title: 'edit Hab!',
          }
        ]

      },
      {
        path: '/catalogo/reservas',
        title: 'Reservas!',
        replace: '/catalogo/reservas/list',
        icon: 'usb',
        routes: [
          {
            path: '/catalogo/reservas/list',
            title: 'list Hab!',
          },
          {
            path: '/catalogo/reservas/new',
            title: 'new Hab!',
          },
          {
            path: '/catalogo/reservas/edit/:id',
            title: 'edit Hab!',
          }
        ]

      },
      {
        path: '/catalogo/autors',
        title: 'autors!',
        replace: '/catalogo/autors/list',
        icon: 'qq',
        routes: [
          {
            path: '/catalogo/autors/list',
            title: 'list autors!',
          },
          {
            path: '/catalogo/autors/list2',
            title: 'new autors2',
          }
        ]
      }
    ]
  }
]

export { menus }
