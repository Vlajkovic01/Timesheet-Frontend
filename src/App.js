import Header from "./components/Header/Header";
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Categories from "./pages/Categories/Categories";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path={'categories'} element={<Categories/>}/>
            </Routes>
            <Footer/>
        </Fragment>
    );
}

export default App;
