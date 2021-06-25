import React from 'react';
import PropTypes from 'prop-types';

import BaseStyle from './BaseStyle';
import Footer from './Footer';
import Nav from './Nav';

import 'normalize.css';

const Layout = ({ children }) => (
    <>
        <BaseStyle />
        <Nav />
        <main>{children}</main>
        <Footer></Footer>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
