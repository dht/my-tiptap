import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const Button = styled.button<{ primary?: boolean }>`
    color: #000;
    margin: 0.1rem;
    border: 1px solid black;
    border-radius: 0.3rem;
    padding: 0.1rem 0.4rem;
    background: ${({ primary }) => (primary ? '#dedeee' : 'white')};
    accent-color: black;
`;
