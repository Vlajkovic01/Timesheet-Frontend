import Header from "./components/Header/Header";
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Categories from "./pages/Categories/Categories";

function App() {
    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path={'categories'} element={<Categories/>}/>
            </Routes>
        </Fragment>
    );
}

export default App;
