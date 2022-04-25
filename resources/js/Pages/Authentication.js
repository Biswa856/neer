import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import ForgotPassword from '../components/auth/ForgotPassword';

function Authentication({name}) {
    var render = <Login/>;
    switch (name) {
        case 'login':
            render = <Login/>
            break;
        case 'signup':
            render = <Signup/>
            break;
        default:
            render = <ForgotPassword/>
            break;
    }
    return (
        render
    );
}

export default Authentication;
