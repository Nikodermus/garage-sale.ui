import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import throttle from 'lodash.throttle';
import Card from '../components/Card';
import SEO from '../components/SEO';
import Modal from '../components/Modal';

import items from '../data.json';
import { mediaDesktop, mediaDesktopXl, mediaTablet } from '../utils/styled';
import DetailedView from '../components/DetailedView';
import { ACTION_TYPES, useGlobalContext } from '../utils/context';

const StyledUL = styled.ul`
    --columns: 1;

    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-gap: var(--sizing-XL);
    width: var(--box);
    margin: auto;

    ${mediaTablet(css`
        --columns: 2;
    `)}

    ${mediaDesktop(css`
        --columns: 3;
    `)}

    ${mediaDesktopXl(css`
        --columns: 4;
    `)}
`;

const StyledH2 = styled.h2`
    font-size: var(--font-size-2XL);
`;

const isIn = (large, search) =>
    large.toLowerCase().trim().includes(search.toLowerCase().trim());

const IndexPage = ({ location }) => {
    const [state, dispatch] = useGlobalContext();
    const [open, setOpen] = useState(false);
    const [activeItem, setItem] = useState(null);
    const params = new URLSearchParams(location.search);
    const search = params.get('search');

    const filteredItems = items
        .filter(({ estado }) => estado === 'disponible')
        .filter(({ nombre, notas }) => {
            if (search) {
                return isIn(nombre, search) || isIn(notas || '', search);
            }
            return true;
        })
        .sort((a, b) => b.precio - a.precio);

    useEffect(() => {
        if (state.itemCount !== filteredItems.length) {
            dispatch({
                type: ACTION_TYPES.COUNT,
                payload: filteredItems.length,
            });
        }
    }, [state.itemCount, filteredItems.length, dispatch]);

    return (
        <>
            <StyledUL>
                {filteredItems.length ? (
                    filteredItems.map((item) => (
                        <Card
                            {...item}
                            key={item.nombre}
                            open={() => {
                                setItem(item);
                                setOpen(true);
                            }}
                        ></Card>
                    ))
                ) : (
                    <StyledH2>No hay nada con ese nombre :(</StyledH2>
                )}
            </StyledUL>

            <Modal isOpen={open} onClose={() => setOpen(false)}>
                {activeItem && <DetailedView {...activeItem}></DetailedView>}
            </Modal>

            <SEO title="👥"></SEO>
        </>
    );
};

export default IndexPage;
