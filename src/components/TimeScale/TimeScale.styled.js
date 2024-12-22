

import styled from 'styled-components';

const ScaleContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #ddd;
    margin-left: 110px; /* Matches TaskLabel in TaskBar */
`;

const TimeCell = styled.div`
    text-align: center;
    padding: 8px 5px;
    font-size: 8px;
    font-weight: bold;
    background: #f3f3f3;
    border-right: 2px solid #ddd;

    &:last-child {
        border-right: none;
    }
`;

export { ScaleContainer, TimeCell };
