import styled from 'styled-components';

export const SharedSection = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#home{
        background: #999;
    };
    &#about{
        background: #777;
    };
    &#work{
        background: #555;
    };
    &#contact{
        background: #333;
    }
`;

export const MainHeader = styled.h1`
    font-size: clamp(3rem, 8vw, 5rem);
    color: #f1f1f1;
    text-transform: uppercase;
    letter-spacing: .3rem;
`;