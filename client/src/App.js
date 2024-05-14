import Login from "./components/Login"
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewDaytrip from "./components/NewDaytrip";
import Navbar from "./components/Navbar";
import Daytrips from "./components/Daytrips";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/newdaytrip" element={<NewDaytrip/>}/>
        <Route path="/daytrips" element={<Daytrips/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
