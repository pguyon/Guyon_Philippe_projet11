import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/"
                    element={<Home/>}/>
                <Route path="/about"
                    element={<About/>}/>
                <Route path="*"
                    element={<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
