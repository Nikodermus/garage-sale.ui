import styled from 'styled-components';

const StyledInput = styled.input`
    background: white;
    font-size: var(--font-size-XL);
    color: var(--color-brand-black);
    padding: var(--sizing-MD) var(--sizing-LG);
    width: 100%;
    border: 2px solid transparent;
    text-align: center;
    border-radius: var(--border-radius-LG);

    &:focus {
        border-color: var(--color-brand-green);
    }
`;

export default StyledInput;
