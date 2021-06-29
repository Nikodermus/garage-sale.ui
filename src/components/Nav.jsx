import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import useDimensions from 'react-cool-dimensions';
import { navigate } from 'gatsby';
import wa from '../../static/images/wa.png';
import Input from './Input';
import { useWhatsappMessage } from '../utils/hooks';
import { useMediaChange } from '../utils/context';
import items from '../data.json';

const StyledNav = styled.nav`
    padding: var(--sizing-2XL) 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: var(--z-index-nav);
    padding-bottom: var(--sizing-3XL);
`;

const StyledDiv = styled.div`
    width: var(--box);
    margin: auto;
    display: flex;
    gap: var(--sizing-XL);
`;

const StyledImg = styled.img`
    width: 4rem;

    &:hover {
        transform: scale(1.2);
    }
`;

const Nav = () => {
    const { ref, height } = useDimensions({ useBorderBoxSize: true });
    const message = useWhatsappMessage();
    const [value, setValue] = useState(() => {
        const params = new URLSearchParams(
            typeof window === 'undefined' ? '' : window.location.search
        );
        const search = params.get('search');
        return search || '';
    });

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--nav-size',
            `${Math.floor(height)}px`
        );
    }, [height]);

    useEffect(() => {
        const params = new URLSearchParams();
        params.append('search', value);
        navigate(`/?${params.toString()}`);
    }, [value]);

    const { isMobile } = useMediaChange();

    return (
        <StyledNav ref={ref}>
            <StyledDiv>
                <Input
                    type="text"
                    placeholder={
                        isMobile
                            ? 'Busca en el garaje...'
                            : `Busca entre ${items.length} cosas en el garaje...`
                    }
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                ></Input>

                <a
                    href={message}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                >
                    <StyledImg src={wa} alt="" />
                </a>
            </StyledDiv>
        </StyledNav>
    );
};

export default Nav;
