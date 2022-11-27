import './App.css';
import 'antd/dist/reset.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchScreen from './pages/Search';
import HomeScreen from './pages/Home';
import Layout from './components/Layout';
import DetailScreen from './pages/Detail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomeScreen />,
        },
        {
          path: '/detail',
          element: <DetailScreen />,
        },
        {
          path: '/search',
          element: <SearchScreen />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
