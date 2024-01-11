import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/dashboard";
import Users from "./scenes/users/users";
import CreateUser from "./scenes/forms/createUser";
import Pets from "./scenes/pets/pets";
import Services from "./scenes/services/services";
import Orders from "./scenes/orders/orders";
import Products from "./scenes/products/products";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

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
              <Route path="/createuser" element={<CreateUser />} />
              <Route path="/pets" element={<Pets />} />
              <Route path="/services" element={<Services />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/products" element={<Products />} />
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
