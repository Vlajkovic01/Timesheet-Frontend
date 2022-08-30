import Header from "./components/Header/Header";
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Categories from "./pages/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";

function App() {
    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path={'categories'} element={<Categories/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Footer/>
        </Fragment>
    );
}

export default App;
