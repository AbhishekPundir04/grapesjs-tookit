import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Editor from '../grapesJs/layout/Editor';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import routeName from '../constants/routeConstants';
import SignIn from '../app/modules/authentication/sign-in';
import Dashboard from '../app/modules/dashboard/Dashboard';
import MyMenus from '../app/modules/my-menus/MyMenus';
import MyOrder from '../app/modules/my-order/MyOrder';

const MainRoute = () => {
    const basename = "/";
    return (
        <div>
            <Routes>
                <Route basename={basename} element={<PublicRouter />}>
                    <Route path={basename} element={<SignIn />} />
                </Route>
                <Route basename={basename} element={<PrivateRouter />}>
                    <Route path={routeName.DASHBOARD} element={<Dashboard />} />
                    <Route path={routeName.MYMENUS} element={<MyMenus />} />
                    <Route path={routeName.MYORDERS} element={<MyOrder />} />
                </Route>
                {
                    localStorage.getItem("ACCESS_TOKEN_CHITRAKOOT") &&
                    <Route path={routeName.MENUEDITOR} element={<Editor />} />
                }

            </Routes>
        </div>
    )
}

export default MainRoute;