import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "./Pages/AuthPage";
import Cart from "./Pages/Cart";
import Categories from "./Pages/Categories";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Order from "./Pages/Order";
import Product from "./Pages/Product";
import { LoginProtector, RouterProtector } from "./RouteProtect";

const router = createBrowserRouter([
  {
    path: "/authorize",
    element: (
      <LoginProtector>
        <AuthPage />
      </LoginProtector>
    ),
  },
  {
    path: "/",
    element: (
      <RouterProtector>
        <Home />
      </RouterProtector>
    ),
  },
  {
    path: "/items",
    element: (
      <RouterProtector>
        <Categories />
      </RouterProtector>
    ),
  },
  {
    path: "/items/:id",
    element: (
      <RouterProtector>
        <Product />
      </RouterProtector>
    ),
  },
  {
    path: "/cart",
    element: (
      <RouterProtector>
        <Cart />
      </RouterProtector>
    ),
  },
  {
    path: "/user/orders",
    element: (
      <RouterProtector>
        <Order />
      </RouterProtector>
    ),
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

const App = () => {

  return <RouterProvider router={router} />;
};

export default App;
