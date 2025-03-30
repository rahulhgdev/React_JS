import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import SignUp from './components/AuthComponents/SignUp'
import SignIn from './components/AuthComponents/SignIn'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import NotFound from './components/NotFound'

export const router = createBrowserRouter([
    {path: '/', element: <App /> },
    {path: '/signup', element: <SignUp />},
    {path: '/signin', element: <SignIn />},
    {path: '/dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute>},
    {path: '*', element: <NotFound />}
])