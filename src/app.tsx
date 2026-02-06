import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/home-page";
import GuestRoute from "./utils/auth/guest-route";
import LoginPage from "./pages/login-page";
import ProtectedRoute from "./utils/auth/protected-route";
import AppPage from "./pages/app-page";
import NotFoundPage from "./pages/not-found-page";
import ProductsPage from "./pages/products-page";
import ProductPage from "./pages/product-page";
import CartPage from "./pages/cart-page";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuestRoute>
        <HomePage />
      </GuestRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <GuestRoute>
        <LoginPage />
      </GuestRoute>
    ),
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <AppPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products",
    element: (
      <ProtectedRoute>
        <ProductsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <ProtectedRoute>
        <ProductPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
