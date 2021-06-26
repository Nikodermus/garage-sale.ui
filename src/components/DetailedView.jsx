import Case from 'case';
import React from 'react';
import styled, { css } from 'styled-components';
import { formatPrice } from '../utils/math';
import { mediaDesktop } from '../utils/styled';

const StyledDiv = styled.div`
    text-align: center;
`;

const StyledImg = styled.img`
    height: 50vh;

    ${mediaDesktop(css`
        height: 70vh;
    `)}
`;

const StyledH3 = styled.h1`
    font-size: var(--font-size-XL);
    font-weight: var(--font-weight-bld);
    margin-top: 0;
`;

const DetailedView = ({ precio, notas, foto, nombre }) => (
    <StyledDiv>
        <StyledH3>
            {Case.capital(nombre)}: <span>{formatPrice(precio)}</span>
        </StyledH3>

        <figure>
            <StyledImg src={foto} alt={nombre} height="80vh" />

            {notas && (
                <figcaption>
                    <br />
                    <p>{notas}</p>
                </figcaption>
            )}
        </figure>
    </StyledDiv>
);

export default DetailedView;
