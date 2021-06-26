import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../constants/site';
import { CSS_TRANSITION_TIME } from '../constants/css';
import { useScrollDisabled } from '../utils/hooks';
import WindowCard from './WindowCard';
import Portal from './Portal';

const Backdrop = styled.aside`
    align-items: center;
    background: ${COLORS.black}DD;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    opacity: 1;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: var(--z-index-modal);

    ${({ hidden }) =>
        hidden &&
        css`
            opacity: 0;
            z-index: var(--z-index-backtap);
        `}
`;

const Modal = ({ children, isOpen, onClose }) => {
    const [isBackdropVisible, setBackdropVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const setScroll = useScrollDisabled();

    const closeOnEscape = useCallback(
        ({ which }) => {
            // 27 Escape code
            if (which === 27) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.addEventListener('keyup', closeOnEscape);

        return () => {
            document.removeEventListener('keyup', closeOnEscape);
        };
    }, [closeOnEscape]);

    useEffect(() => {
        setScroll(isOpen);

        if (isOpen) {
            // show backdrop then show modal
            setBackdropVisible(true);
            setTimeout(() => {
                setModalVisible(true);
            }, CSS_TRANSITION_TIME / 2);
        } else {
            // hide modal then hide backdrop
            setModalVisible(false);
            setTimeout(() => {
                setBackdropVisible(false);
            }, CSS_TRANSITION_TIME);
        }
    }, [isOpen, setScroll]);

    return (
        <Portal>
            <Backdrop
                hidden={!isBackdropVisible}
                onKeyUp={closeOnEscape}
                role="button"
                tabIndex="-1"
            >
                <WindowCard onClose={onClose} isModalVisible={isModalVisible}>
                    {children}
                </WindowCard>
            </Backdrop>
        </Portal>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
