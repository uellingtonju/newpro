import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contatos from "./pages/Contatos";

function AppRoutes(){
  return(
    <BrowserRouter>        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contatos" element={ <Contatos />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes