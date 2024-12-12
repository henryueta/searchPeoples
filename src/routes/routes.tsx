
import { createBrowserRouter } from 'react-router-dom';
import SearchPage from './searchPageResult/SearchPageResult';
import App from '../routes/app/App';


export const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/search",
    element:<SearchPage/>
  }
]);