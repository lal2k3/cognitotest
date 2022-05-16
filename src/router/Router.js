// ** Router imports
import { lazy } from 'react'

// ** Router imports
import { useRoutes } from 'react-router-dom'

// ** Components
const Login = lazy(() => import('../pages/Login.js'));
const Root = lazy(() => import('../components/Root.js'));

const Router = ({ allRoutes }) => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Root />,
    },
    {
      path: '/login',
      element: <Login />,
      meta: {
        layout: 'blank',
        publicRoute: true,
        restricted: true
      }
    }
  ])

  return routes;
}

export default Router
