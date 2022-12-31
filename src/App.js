
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './global.css'

function App() {
  return (
    <div >
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
