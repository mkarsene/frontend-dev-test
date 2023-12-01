import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import Manageuser from "./pages/Manageuser";
import Managerthresholds from "./pages/Managerthresholds";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import CreateUserForm from "./components/CreateUserForm";
import ProductDetails from "./components/ProductDetails";


export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Box fontSize="xl">
      <Routes>
      <Route path="/" element={ <Products />} />
      <Route path="/manage_user" element={ <Manageuser />} />
      <Route path="/manage_thresholds" element={<Managerthresholds />} />
      <Route path="/create_user" element={<CreateUserForm />} />
      <Route path="/product:id" element={<ProductDetails />} />
    </Routes>
    </Box>
  </ChakraProvider>
)
