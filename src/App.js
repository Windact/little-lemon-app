import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import About from './pages/About';
import Menu from './pages/Menu';
import {Reservations} from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import RootLayout from './layouts/RootLayout';
import Help from './pages/Help';
import Home from './pages/Home';
import ConfirmedBooking from "./pages/ConfirmedBooking";

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element={<Home></Home>}></Route>
      <Route path='about' element= {<About></About>}></Route>
      <Route path='help' element= {<Help></Help>}></Route>
      <Route path='menu' element= {<Menu></Menu>}></Route>
      <Route path="reservations" element={<Reservations></Reservations>}></Route>
      <Route path='orderOnline' element={<OrderOnline></OrderOnline>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path="bookingConfirmation" element={<ConfirmedBooking></ConfirmedBooking>}></Route>

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
