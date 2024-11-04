import { useRoutes } from "react-router-dom";
import AddProduct from "./components/Admin/AddProduct";
import ProductList from "./components/Admin/ProductList";
import Login from "./components/Login";
import Register from "./components/Register";
import { path } from "./constants/path";
import AdminLayout from "./layout/AdminLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      element: <Home />,
      path: path.home,
    },
    {
      element: <ProductPage />,
      path: path.product_detail,
    },
    {
      element: <AuthLayout />,
      children: [
        {
          element: <Login />,
          path: path.login,
        },
        {
          element: <Register />,
          path: path.register,
        },
      ],
    },
    {
      element: <AdminLayout />,
      children: [
        {
          element: <ProductList />,
          path: path.product_list,
        },
        {
          element: <AddProduct />,
          path: path.add_product,
        },
        {
          element: <AddProduct />,
          path: path.edit_product,
        },
      ],
    },
  ]);
  return routeElement;
}
