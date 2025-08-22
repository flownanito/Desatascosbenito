import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import We from "./pages/we/We"
import Advantages from "./pages/advantages/Advantages"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/Home" element={<Home />}> </Route>
        <Route path="/We" element={<We />}> </Route>
        <Route path="/Advantages" element={<Advantages />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App