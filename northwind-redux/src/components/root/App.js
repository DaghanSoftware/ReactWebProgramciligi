import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
function App() {
  return (
    <Container>
      <Navi></Navi>
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route exact path="/product" element={<DashBoard />} />
        <Route exact path="/cart" element={<CartDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
