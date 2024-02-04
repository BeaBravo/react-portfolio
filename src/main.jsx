import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Error from './pages/Error.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'

// import css

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: '/Portfolio',
                element: <Portfolio />
            },
            {
                path: '/Contact',
                element: <Contact />
            },
            {
                path: '/Resume',
                element: <Resume />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
