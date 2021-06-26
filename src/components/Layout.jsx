import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BaseStyle from './BaseStyle';
import Footer from './Footer';
import Nav from './Nav';

import 'normalize.css';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--nav-size));
`;

const Layout = ({ children }) => (
    <StyledDiv>
        <BaseStyle />
        <Nav />
        <main>{children}</main>
        <Footer></Footer>
    </StyledDiv>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
