import React, { useEffect } from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import useDimensions from 'react-cool-dimensions';
import Input from './Input';

const StyledNav = styled.nav`
    padding: var(--sizing-LG);
    position: fixed;
    top: 0;
    width: 100%;
`;

const Nav = () => {
    const { ref, height } = useDimensions({ useBorderBoxSize: true });

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--nav-size',
            `${Math.floor(height)}px`
        );
    }, [height]);

    return (
        <StyledNav ref={ref}>
            <Input type="text" placeholder="Busca en el garage..."></Input>
        </StyledNav>
    );
};

export default Nav;
