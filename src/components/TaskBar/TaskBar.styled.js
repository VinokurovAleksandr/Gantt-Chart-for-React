import styled from 'styled-components';

const TaskRow = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;


const TaskLabel = styled.div`
    width: 150px;
    font-size: 14px;
    font-weight: bold;
    padding-right: 10px;
    text-align: right;
    color: #555;
`;


const TaskBarContainer = styled.div`
    flex: 1;
    position: relative;
    height: 30px;
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
`;


const TaskBarStyled = styled.div`
    position: absolute;
    height: 100%;
    background: ${(props) => props.color};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.5s ease-in;

    &:hover {
        background: ${(props) => props.hoverColor};
        cursor: pointer;
        transition: background 0.3s ease;
    }
`;


const TaskBarText = styled.span`
    color: white;
    font-size: 12px;
    font-weight: bold;
`;

export {TaskRow, TaskLabel,TaskBarContainer,TaskBarStyled,TaskBarText }