import React from 'react';
import styled from 'styled-components';
import { useWhatsappMessage } from '../utils/hooks';
import wa from '../../static/images/wa.png';
import { formatPhone } from '../utils/math';
import { INFO } from '../constants/site';

const StyledFooter = styled.footer`
    margin-top: auto;
    padding: var(--sizing-XL);
    font-weight: var(--font-weight-bld);

    a {
        text-decoration: underline;
    }
`;

const StyledImg = styled.img`
    width: 20px;
    vertical-align: bottom;
`;

const Footer = () => {
    const message = useWhatsappMessage();

    return (
        <StyledFooter>
            Laura y Nico venden todo. Recógelo en Chapinero, escribenos a
            nuestro{' '}
            <a
                href={message}
                target="_blank"
                rel="noopener noreferrer nofollow"
            >
                <StyledImg src={wa} /> WhatsApp
            </a>{' '}
            o llamanos al{' '}
            <a
                href={`tel:${INFO.number}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
            >
                {formatPhone(INFO.number)}
            </a>
            .
        </StyledFooter>
    );
};

export default Footer;
