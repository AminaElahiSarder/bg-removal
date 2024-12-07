
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navber from "./components/Navber";
import Footer from "./components/Footer";

 
const App = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navber/> 
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/result" element={<Result/>}/>
                <Route path="/buy" element={<BuyCredit/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;