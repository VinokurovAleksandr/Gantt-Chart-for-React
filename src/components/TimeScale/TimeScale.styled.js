import styled from 'styled-components';

const ScaleContainer = styled.div`
    padding-left: 110px;
    display: flex;
    border-bottom: 1px solid #ddd;

`;

const TimeCell = styled.div`
    flex: 1;
    text-align: center;
    padding: 8px 2px;
    font-size: 8px;
    font-weight: bold;
    background: #f3f3f3;
    border-right: 2px solid #ddd;
   


    &:last-child {
        border-right: none;
    }

    @media (max-width: 768px) {
        font-size: 8px;
    }

    @media (max-width: 480px) {
        font-size: 8px;
    }
`;

export { ScaleContainer, TimeCell}