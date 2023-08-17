import { NotFound } from "../pages/404/NotFound";
import Forgetpassword from "../pages/Forgetpassword/Forgetpassword";
import Login from "../pages/Login/Login";
import Register from "../pages/Ragister/Register";
import PubliceGard from "./PubliceGard";


const publicRouter = [
 {
  element:<PubliceGard/>,
  children:[
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forget",
      element: <Forgetpassword />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]
 }
];

export default publicRouter;
