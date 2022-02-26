//Create a login page for a website that has a login form.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../constants';

import { Button } from '@material-ui/core';
import styled from 'styled-components';

const LinksGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr [col-start]);
  margin-bottom: 1em;
  min-height: 30px;
  padding: 1em;
  width: 100%;
`;

const LinkGridWrapper = styled.div``;

const isCurrentPage = linkPathname => {
  return window.location.pathname === linkPathname;
};

const linkTextColor = linkPathname => {
  return isCurrentPage(linkPathname) ? '#FFFFFF' : 'rgba(255,255,255,.75)';
};

//The login form should have a username and password input.
const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 50%;
    min-height: 6em;
    padding: 1em;
    width: 100%;
`;
//The login form should have a submit button.
const LoginFormButton = styled(Button)`
    margin: 5px 5px 5px auto;
    text-align: center;
`;
//The login form should have a link to the register page.
const LoginFormLink = styled(Link)`
    color: rgba(255,255,255,.75);
    text-decoration: none;
`;
//The login form should have a link to the forgot password page.
const LoginFormLink2 = styled(Link)`
    color: rgba(255,255,255,.75);
    text-decoration: none;
`;
//Define the login page.
const Login = () => (
    <div>
        <LoginForm>
            <h1>Login</h1>
            <label>Username:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
            <LoginFormButton variant="contained" color="primary">Login</LoginFormButton>
            <LoginFormLink to={routes.REGISTER}>Register</LoginFormLink>
            <LoginFormLink2 to={routes.FORGOT_PASSWORD}>Forgot Password</LoginFormLink2>
            <LoginFormLink3 to={routes.HOME}>Home</LoginFormLink3>
            <LoginFormLink4 to={routes.ITEMS}>Items</LoginFormLink4>
        </LoginForm>
    </div>
);
//Define the register page.
const Register = () => (
    <div>
        <h1>Register</h1>
        <p>Register</p>
    </div>
);
//Define the forgot password page.
const ForgotPassword = () => (
    <div>
        <h1>Forgot Password</h1>
        <p>Forgot Password</p>
    </div>
);

class Login extends Component {
    render() {
    const loginPages =  (
        <Switch>
            <Route exact path={routes.LOG_IN} component={Login} />
            <Route exact path={routes.REGISTER} component={Register} />
            <Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
        </Switch>
    );
        return (
            <div>
                <Switch>
                    <Route exact path={routes.LOG_IN} component={Login} />
                    <Route exact path={routes.REGISTER} component={Register} />
                    <Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
                </Switch>
            </div>
        );
    }
}









