import styled from 'styled-components';

const ScaleContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #ddd;
`;

const TimeCell = styled.div`
    flex: 1;
    text-align: center;
    padding: 10px 5px;
    font-size: 14px;
    font-weight: bold;
    background: #f3f3f3;
    border-right: 3px solid #ddd;
   


    &:last-child {
        border-right: none;
    }
`;

export { ScaleContainer, TimeCell}