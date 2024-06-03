import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import Order, { loader as orderLoader } from './features/order/Order';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import { action as updateOrderAction } from './features/order/UpdateOrder';

// Create the router with route configurations
const router = createBrowserRouter([
  {
    element: <AppLayout />, // The layout component for the app, which includes the common UI elements
    errorElement: <Error />,
    children: [
      {
        path: '/', // Route for the home page
        element: <Home />, // Component to render for the home page
      },
      {
        path: '/menu', // Route for the menu page
        element: <Menu />, // Component to render for the menu page
        loader: menuLoader, // Data loader function for the menu page
        errorElement: <Error />,
      },
      {
        path: '/cart', // Route for the cart page
        element: <Cart />, // Component to render for the cart page
      },
      {
        path: '/order/new', // Route for creating a new order
        element: <CreateOrder />, // Component to render for creating a new order
        action: createOrderAction,
      },
      {
        path: '/order/:orderId', // Route for viewing a specific order
        element: <Order />, // Component to render for viewing a specific order
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

// App component that provides the router configuration to the application
export default function App() {
  return <RouterProvider router={router} />;
}
