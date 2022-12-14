import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import Logement from "./pages/logement/Logement";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/"
                    element={<Home/>}/>
                <Route path="/about"
                    element={<About/>}/>
                <Route exact path="/logement/:id" element={<Logement/>}/>
                <Route path="*"
                    element={<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
