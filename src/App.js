import "./App.css";
import styled from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard"
import Pets from "../src/pages/Pets"
import Users from "../src/pages/Users"
import Appointments from "../src/pages/Appointments"
import Orders from "../src/pages/Orders"
import Services from "../src/pages/Services"
import Sidebar from "../src/components/Sidebar";

function App() {
  return (
<BrowserRouter>
<Sidebar/>
<Routes>
  <Route path="admin/dashboard" element={Dashboard}/>
  <Route path="admin/pets" element={Pets}/>
  <Route path="admin/users" element={Users}/>
  <Route path="admin/services" element={Services}/>
  <Route path="admin/orders" element={Orders}/>
  <Route path="admin/appointments" element={Appointments}/>
</Routes>
</BrowserRouter>
    // <Container>
    //   <Sidebar />
    //   <MainContent />
    // </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;