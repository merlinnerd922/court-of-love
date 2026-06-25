
/**
 * Import all page components here
 */
import HomePage from '../pages/HomePage';
import RulesPage from '../pages/RulesPage';
import {Route, Routes} from 'react-router'

// noinspection JSUnusedGlobalSymbols
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Routes>
        <Route index path="" element={<HomePage/>} />
        <Route path="/rules" element={<RulesPage/>} />
    </Routes>
);