/* eslint-disable */
import { ViouTable } from '../views/pages/request/Request';
import { UserTable } from '../views/pages/user/User';
import DefaultLayout from "../layout/DefaultLayout";
import { RequestForm } from "../views/pages/request/RequestForm"
import { MatchRequest } from "../views/pages/request/MatchRequest"
import { Dashboard } from "../views/pages/dashboard/Dashboard"

export const adminRoutes = [
    {
        path: "/",
        key: "/",
        name: "Home",
        component: DefaultLayout,
    },
    {
        path: "/dashboard",
        key: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        exact: true,
    },
    {
        path: "/request/all",
        key: "/request/all",
        name: "Requests",
        component: ViouTable,
        exact: true
    },
    {
        path: "/request/:id",
        key: "/request/:id",
        name: "RequestById",
        component: RequestForm,
        exact: true
    },
    {
        path: "/request/match/:id",
        key: "/request/match/:id",
        name: "MatchRequestById",
        component: MatchRequest,
        exatc: true
    },
    {
        path: "/user/all",
        key: "/user/all",
        name: "Users",
        component: UserTable,
        exact: true
    },
    // {
    //     path: "/user/:id",
    //     key: "/user/:id",
    //     name: "UserById",
    //     component: UserForm,
    //     exact: true
    // },
];
