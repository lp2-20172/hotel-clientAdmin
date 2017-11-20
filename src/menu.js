
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
            title: 'list cat!',
          },
          {
            path: '/catalogo/habitaciones/new',
            title: 'new cat!',
          },
          {
            path: '/catalogo/habitaciones/edit/:id',
            title: 'edit cat!',
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
