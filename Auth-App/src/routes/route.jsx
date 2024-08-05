
import {
    LoginPage,
    HomePage,
    HomeContent,
    Dashboard,
    Settings,
    RequiredAuth
  } from '../components/global'

export default [
    {
        path:"/",
        element: < HomePage></ HomePage>,
        // make login, setting and dashboard childrenof home
        children: [
          // index route
          {
            index: true,
            element: < HomeContent></ HomeContent>
          },
          {
            path:"/login",
            element: < LoginPage></ LoginPage>,
            RouteName:'Login',
            protected:false
            // you can add children into this too, foloow same login with home
          },
          {
            path:"/dashboard",
            element: <RequiredAuth>< Dashboard /></RequiredAuth>,
            RouteName:'Dashboard',
            protected:true
        },
          
          {
            path:"/settings",
            element:<RequiredAuth><Settings /></RequiredAuth>,
            RouteName:'Settings',
            protected:true
        }
        ]
      },
]