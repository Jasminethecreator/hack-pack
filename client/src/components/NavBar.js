import React, { Component } from 'react';
import styled from 'styled-components';

import Links from './Links';

const Container = styled.div.attrs({
  className: 'container',
})`
  max-width: 100%;
  padding-left: 0px;
  padding-right: 0px;
`;

const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
  margin-bottom: 20px;

  @media screen and (min-width: 992px) {
    padding: 0.5em 25%;
  }
`;

const navBarItems = [
  {
    name: 'Items',
    toPathname: '/items',
    className: 'nav-link',
  },
  {
    name: 'Create Item',
    toPathname: '/item/create',
    className: 'nav-link',
  },
  {
    name: 'Create User',
    toPathname: '/user/create',
    className: 'nav-link',
  },
  {
    name: 'Users',
    toPathname: '/users',
    className: 'nav-link', 
  },
  {
    name: 'Login',
    toPathname: '/login',
    className: 'nav-link',    
  },
];

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Links navBarItems={navBarItems} />
        </Nav>
      </Container>
    );
  }
}

export default NavBar;
