import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./common/error";
import Login from "./components/login/login";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:[
        {
            path: 'login',
            element: <Login/>
        }
    ]
  },
]);

export default AppRouter;
