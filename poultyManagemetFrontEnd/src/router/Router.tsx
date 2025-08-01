import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Sales from "../pages/Sales";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sales",
        element: <Sales></Sales>,
      },
    ],
  },
]);
