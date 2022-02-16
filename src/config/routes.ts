import { IRouteProps } from "../library/RouteProp";

import LoginScreen from "../screen/Login/Login";
import ForgotPasswordScreen from "../screen/Login/ForgotPassword";
import CreateAccountScreen  from "../screen/Login/CreateAccount";
import MainScreen from '../screen/Login/MainScreen';


const routes: IRouteProps[] = [
    {
        name: 'Login',
        component: LoginScreen
    },
    {
        name: 'Forgot',
        component: ForgotPasswordScreen
    },
    {
        name: 'CreateAccount',
        component: CreateAccountScreen
    },
    {
        name: 'MainTabs',
        component: MainScreen
    },
]

export default routes;