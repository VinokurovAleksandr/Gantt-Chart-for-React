import React from 'react';

import { calculateBarPosition } from '../utils/dateUtils';

import {
    TaskRow, 
    TaskLabel,
    TaskBarContainer,
    TaskBarStyled,
    TaskBarText
} from '../TaskBar/TaskBar.styled'


const TaskBar = ({ task, dateRange }) => {
    const { left, width } = calculateBarPosition(task, dateRange);
    return (
        <TaskRow>
            <TaskLabel>{task.name}</TaskLabel>
            <TaskBarContainer>
                <TaskBarStyled
                    style={{ left: `${left}%`, width: `${width}%` }}
                    color={task.color || '#2196f3'}
                    hoverColor={task.hoverColor || '#35485b'}
                >
                    <TaskBarText>{`${task.startDate} - ${task.endDate}`}</TaskBarText>
                </TaskBarStyled>
            </TaskBarContainer>
        </TaskRow>
    );
};

export default TaskBar;

