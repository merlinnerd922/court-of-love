import RulesPage from "./pages/RulesPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import {Outlet, Route, Routes, useLocation} from "react-router";
import {ColPageLink} from "./ColPageLink.tsx";


function getCurrentSubUrl() {
    return () => useLocation().pathname;
}

function App() {

    const MAIN_SUB_URL = "/";
    const RULES_SUB_URL = "/rules";

    return <>
        <header id="col_header">
            <h1 id="col_title">Court of Love</h1>
            <div id="col_slogan">Queer sex, but different</div>
        </header>
        <nav id="col_menu_bar">
            {ColPageLink(getCurrentSubUrl(), MAIN_SUB_URL, "Home")}
            {ColPageLink(getCurrentSubUrl(), RULES_SUB_URL, "Rules and Guidelines")}
        </nav>
        <div id="col_main_body">
            <Outlet/>
            <Routes>
                <Route path={MAIN_SUB_URL} element={<HomePage/>}/>
                <Route path={RULES_SUB_URL} element={<RulesPage/>}/>
            </Routes>
        </div>
    </>
}

export default App

