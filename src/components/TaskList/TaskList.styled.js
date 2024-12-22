import styled from 'styled-components';

export const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

export const TaskListItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const SubtaskList = styled.div`
    padding-left: 20px;
    border-left: 2px dashed #ccc;
    margin-top: 5px;
`;

export const AddSubtaskButton = styled.button`
    margin-top: 5px;
    padding: 5px 10px;
    font-size: 12px;
    background-color: #2196f3;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: #1769aa;
    }
`;
