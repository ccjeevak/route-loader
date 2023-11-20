import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { ErrorPage } from './common/components';
import Root from './root';
import { postListLoader, postViewLoader } from './common/utils';
import {PostList, PostView} from './features'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <PostList />,
          loader: postListLoader,
        },
        {
          path: "posts/:postId",
          element: <PostView />,
          loader: postViewLoader,
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
