
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import { About } from './pages/About.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "enunciado",
        element: <div className='enunciado'><p>Llamar a la API Cat Fact, y con las primeras 3 palabras buscar en la API de Giphy un gif, mostrar gif a la izquierda, texto a la derecha, todo centrado verticalmente</p></div>,
      },
    ],
  },
  {
    path: "about",
    element: <About/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    //<App />
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
