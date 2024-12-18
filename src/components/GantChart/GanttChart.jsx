import React, { useState } from 'react';
import TimeScale from '../TimeScale/TimeScale';
import TaskBar from '../TaskBar/TaskBar';
import { getDateRange, extendDateRange } from '../utils/dateUtils';

import { ChartContainer, TaskList } from '../GantChart/GanttChart.styled';

const GanttChart = ({ tasks: initialTasks, startDate, endDate }) => {
    const [tasks, setTasks] = useState(initialTasks);
    const [dateRange, setDateRange] = useState(getDateRange(startDate, endDate));

    const handleTaskUpdate = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );

        const newDateRange = extendDateRange(dateRange, updatedTask.startDate, updatedTask.endDate);
        if (newDateRange.length !== dateRange.length) {
            setDateRange(newDateRange);
        }
    };

    return (
        <ChartContainer>
            <TimeScale dateRange={dateRange} />
            <TaskList>
                {tasks.map((task) => (
                    <TaskBar
                        key={task.id}
                        task={task}
                        dateRange={dateRange}
                        onTaskUpdate={handleTaskUpdate}
                    />
                ))}
            </TaskList>
        </ChartContainer>
    );
};

export default GanttChart;

