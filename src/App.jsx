import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Note from "./components/Note.jsx";
import ViewNote from './components/ViewNote.jsx';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <div>
          <Navbar />
          <Home />
        </div>
      },
      {
        path: '/notes',
        element: <div>
          <Navbar />
          <Note />
        </div>
      },
      {
        path: '/notes/:id',
        element: <div>
          <Navbar />
          <ViewNote />
        </div>
      }
    ]
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
