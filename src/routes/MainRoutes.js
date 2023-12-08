import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Suspects = Loadable(lazy(() => import('views/suspects')));
const News = Loadable(lazy(() => import('views/news')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: (
        <>
          <DashboardDefault />
          <p></p>
          <News />
        </>
      )
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: (
            <>
              <DashboardDefault />
              <p></p>
              <News />
            </>
          )
        },
        {
          path: 'suspects',
          element: <Suspects />
        },
        {
          path: 'news',
          element: <News />
        }
      ]
    }
  ]
};

export default MainRoutes;
