import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import { DashboardPage } from './dashboard';



 const routes = [{
     path: '/',
     exact: true,
     Component: DashboardPage,
 }];
 

 export const MyRoutes = () => (
    <Router>
        <Routes>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.Component />} 
            >
            </Route>
        ))}
        </Routes>
    </Router>
)