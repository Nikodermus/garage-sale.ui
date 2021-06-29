import Case from 'case';
import React from 'react';

import styled from 'styled-components';
import { formatPrice } from '../utils/math';

const status = {
    disponible: {
        color: 'brand-green',
    },
    apartado: {
        color: 'brand-red',
    },
};

const StyledArticle = styled.article`
    border-radius: var(--border-radius-LG);
    overflow: hidden;
    position: relative;
    aspect-ratio: 1 / 1;
    width: 100%;

    &:hover {
        cursor: pointer;
        transform: translate(2%, 2%);

        figcaption {
            background: var(--color-black);
        }
    }
`;

const StyledImg = styled.img`
    object-fit: cover;
    overflow: hidden;
    width: 100%;
    max-height: 100%;
    aspect-ratio: 1/1;
`;

const StyledFigcaption = styled.figcaption`
    padding: var(--sizing-LG);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: var(--sizing-LG);
    position: absolute;
    bottom: 0;
    left: 0;
    background: var(--color-gray-dark);
    width: 100%;
`;

const StyledH3 = styled.h3`
    font-size: var(--font-size-XL);
    font-weight: var(--font-weight-bld);
`;

const StyledSmall = styled.small`
    font-size: var(--font-size-LG);
`;

const Card = ({ nombre, precio, foto, estado, open }) => (
    <StyledArticle onClick={open}>
        <figure>
            <StyledImg
                src={`${foto}?nombre=${encodeURIComponent(nombre)}`}
                alt={nombre}
            />
            <StyledFigcaption>
                <StyledH3>{Case.capital(nombre)}</StyledH3>
                <StyledSmall>{formatPrice(precio)}</StyledSmall>
            </StyledFigcaption>
        </figure>
    </StyledArticle>
);

export default Card;
