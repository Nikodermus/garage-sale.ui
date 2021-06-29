import React from 'react';
import styled from 'styled-components';
import { useWhatsappMessage } from '../utils/hooks';
import wa from '../../static/images/wa.png';
import { formatPhone } from '../utils/math';
import { INFO } from '../constants/site';

const StyledFooter = styled.footer`
    margin: auto;
    margin-bottom: 0;
    padding: var(--sizing-XL) 0;
    font-weight: var(--font-weight-bld);
    width: var(--box);

    a {
        text-decoration: underline;
    }
`;

const StyledImg = styled.img`
    width: 20px;
    vertical-align: bottom;
`;

const StyledSpan = styled.span`
    white-space: nowrap;
`;

const Footer = () => {
    const message = useWhatsappMessage();

    return (
        <StyledFooter>
            Laura y Nico venden todo. Recógelo en Chapinero, escribenos a
            nuestro{' '}
            <StyledSpan>
                <a
                    href={message}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                >
                    <StyledImg src={wa} /> WhatsApp
                </a>{' '}
            </StyledSpan>
            o llamanos al{' '}
            <StyledSpan>
                <a
                    href={`tel:${INFO.number}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                >
                    {formatPhone(INFO.number)}
                </a>
            </StyledSpan>
            .
        </StyledFooter>
    );
};

export default Footer;
