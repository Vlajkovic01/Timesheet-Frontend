import Header from "./components/Header/Header";
import {Fragment} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Categories from "./pages/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import {useSelector} from "react-redux";

function App() {

    const {isLoggedIn} = useSelector(state => state.auth);

    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Navigate to={isLoggedIn ? '/timesheet' : '/login'}/>}/>
                <Route path={'categories'} element={<Categories/>}/>
                <Route path={'login'} element={<Login/>}/>
            </Routes>
            <Footer/>
        </Fragment>
    );
}

export default App;
