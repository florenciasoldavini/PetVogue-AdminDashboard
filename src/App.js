import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/dashboard";
import Users from "./scenes/users/users";
import Pets from "./scenes/pets/pets";
import Services from "./scenes/services/services";
import Orders from "./scenes/orders/orders";
import Products from "./scenes/products/products";
import CreateUser from "./scenes/forms/create/createUser";
import CreateProduct from "./scenes/forms/create/createProduct";
import CreatePet from "./scenes/forms/create/createPet";
import CreateOrder from "./scenes/forms/create/createOrder";
import CreateService from "./scenes/forms/create/createService";
import UpdateUser from "./scenes/forms/update/updateUser";
import UpdateProduct from "./scenes/forms/update/updateProduct";
import UpdatePet from "./scenes/forms/update/updatePet";
import UpdateOrder from "./scenes/forms/update/updateOrder";
import UpdateService from "./scenes/forms/update/updateService";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar/calendar";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import getAllUsers from "./redux/actions/users/getAllUsers";
import getAllPets from "./redux/actions/pets/getAllPets";
import getAllOrders from "./redux/actions/orders/getAllOrders";
import getAllProducts from "./redux/actions/products/getAllProducts";
import getAllServices from "./redux/actions/services/getAllServices";
import getAllAppointments from "./redux/actions/appointments/getAllAppointments";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPets());
    dispatch(getAllOrders());
    dispatch(getAllProducts());
    dispatch(getAllServices());
    dispatch(getAllAppointments());
});

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/form/create" element={<CreateUser />} />
              <Route path="/users/form/update" element={<UpdateUser />} />
              <Route path="/pets" element={<Pets />} />
              <Route path="/pets/form/create" element={<CreatePet />} />
              <Route path="/pets/form/update" element={<UpdatePet />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/form/create" element={<CreateService />} />
              <Route path="/services/form/update" element={<UpdateService />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/form/create" element={<CreateOrder />} />
              <Route path="/orders/form/update" element={<UpdateOrder />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/form/create" element={<CreateProduct />} />
              <Route path="/products/form/update" element={<UpdateProduct />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
