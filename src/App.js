
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';
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
