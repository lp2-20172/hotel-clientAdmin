
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
