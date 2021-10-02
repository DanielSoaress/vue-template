import { router } from '../config';

/********************************************************
 * GERAL
 ********************************************************/
const geral = {
  path: '/',
  redirect: router.inicio.path,
  //component: layout,
  children: [
    /********************************************************
     * MINHA PÁGINA
     ********************************************************/
    {
      path: router.inicio.path,
      name: router.inicio.name,
      component: () => import('../pages/Inicio/Inicio')
    }
  ]
};




const routes = [
  geral,
  //{ path: '/erro', name: 'erro', component: erro },
  //{ path: '*', component: erro },
];

export default routes;
