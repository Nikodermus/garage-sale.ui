import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useClickOutside } from '../utils/hooks';
import { toREM } from '../utils/styled';

const StyledModal = styled.div`
    background: var(--color-black);
    border-radius: var(--border-radius-MD);
    display: flex;
    flex-direction: column;
    left: 0;
    overflow: hidden;
    position: relative;
    top: 0;
    transform: scale(1);
    transition-duration: 300, 200, 100;
    transition-property: transform, left, top;
    max-width: 70vw;

    ${({ large, inactive }) =>
        large &&
        !inactive &&
        css`
            max-width: 85vw;
        `}

    ${({ closed, inactive }) =>
        closed &&
        !inactive &&
        css`
            left: -100vw;
            top: 100vh;
            transform: scale(0.1, 0.001);
        `}
`;

const StyledHeader = styled.header`
    align-items: center;
    background: var(--color-gray-dark);
    display: flex;
    flex-shrink: 0;
    height: var(--sizing-3XL);
    justify-content: flex-start;
    padding: 0 var(--sizing-MD);
`;

const buttonColors = {
    close: 'red',
    minimize: 'yellow',
    expand: 'green',
};

const StyledButton = styled.button`
    border-radius: var(--border-radius-round);
    height: var(--sizing-LG);
    margin-right: var(--sizing-MD);
    width: var(--sizing-LG);
    background: ${({ action }) => `var(--color-brand-${buttonColors[action]})`};

    ${({ disabled }) =>
        disabled &&
        css`
            background: var(--color-gray-medium);
            pointer-events: none;
        `};
`;

const StyledFooter = styled.footer`
    background: var(--color-gray-dark);
    height: var(--sizing-2XL);
`;

const StyledContent = styled.div`
    flex: 1 1 100%;
    overflow-y: visible;
    padding: var(--sizing-XL);
    position: relative;
`;

const WindowCard = ({
    onClose = () => {},
    children,
    isModalVisible,
    footer = true,
    ...props
}) => {
    const [isMax, setMax] = useState(true);
    const modalRef = useRef(null);

    useClickOutside(modalRef, () => {
        if (isModalVisible) onClose();
    });

    return (
        <StyledModal
            large={isMax}
            closed={!isModalVisible}
            ref={modalRef}
            {...props}
        >
            <StyledHeader>
                <StyledButton
                    type="button"
                    action="close"
                    onClick={onClose}
                ></StyledButton>
                <StyledButton
                    type="button"
                    action="minimize"
                    disabled={!isMax}
                    onClick={() => setMax(false)}
                ></StyledButton>
                <StyledButton
                    type="button"
                    onClick={() => setMax(true)}
                    action="expand"
                    disabled={isMax}
                ></StyledButton>
            </StyledHeader>

            <StyledContent>{children}</StyledContent>
        </StyledModal>
    );
};

WindowCard.propTypes = {
    footer: PropTypes.bool,
    isModalVisible: PropTypes.bool,
    onClose: PropTypes.func,
};

export default WindowCard;
