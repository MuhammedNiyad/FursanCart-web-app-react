import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "./Pages/AuthPage";
import Cart from "./Pages/Cart";
import Categories from "./Pages/Categories";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Order from "./Pages/Order";
import Product from "./Pages/Product";
import { LoginProtector, RouterProtector } from "./RouteProtect";
import ProfilePge from "./Pages/ProfilePge";
import WishListPage from "./Pages/WishListPage";

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
    element: <Home />,
  },
  {
    path: "/items",
    element: <Categories />,
  },
  {
    path: "/items/:id",
    element: <Product />,
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
    path: "/user/profile",
    element: (
      <RouterProtector>
        <ProfilePge />
      </RouterProtector>
    ),
  },
  {
    path: "/user/wishlist",
    element: (
      <RouterProtector>
        <WishListPage />
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
