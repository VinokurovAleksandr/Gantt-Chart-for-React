import React from 'react';
import TimeScale from '../TimeScale/TimeScale';
import TaskBar from '../TaskBar/TaskBar';
import { getDateRange } from '../utils/dateUtils';

import {
    ChartContainer,
    TaskList
} from '../GantChart/GanttChart.styled'


const GanttChart = ({ tasks, startDate, endDate }) => {
    const dateRange = getDateRange(startDate, endDate);

    return (
        <ChartContainer>
            <TimeScale dateRange={dateRange} />
            <TaskList>
                {tasks.map((task) => (
                    <TaskBar key={task.id} task={task} dateRange={dateRange} />
                ))}
            </TaskList>
        </ChartContainer>
    );
};

export default GanttChart;
