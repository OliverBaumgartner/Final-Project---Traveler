import Login from "./components/Login"
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewDaytrip from "./components/NewDaytrip";
import Navbar from "./components/Navbar";
import Daytrips from "./components/Daytrips";
import Inspect from "./components/Inspect";
import Edit from "./components/Edit";
import Owner from"./components/Owner";
import Footer from "./components/Footer"

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
        <Route path="/inspect/:id" element={<Inspect/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/owner" element={<Owner/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
