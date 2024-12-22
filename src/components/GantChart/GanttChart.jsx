import React, { useState } from 'react';
import TimeScale from '../TimeScale/TimeScale';
import TaskList from '../TaskList/TaskList';
import { getDateRange } from '../utils/dateUtils';
import { ChartContainer } from './GanttChart.styled';



const GanttChart = ({ initialTasks, startDate, endDate }) => {
    
    const [tasks, setTasks] = useState(initialTasks);
    const dateRange = startDate && endDate ? getDateRange(startDate, endDate) : [];


    const handleTaskUpdate = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id
                    ? { ...task, ...updatedTask }
                    : {
                          ...task,
                          subtasks: task.subtasks?.map((subtask) =>
                              subtask.id === updatedTask.id ? { ...subtask, ...updatedTask } : subtask
                          ),
                      }
            )
        );
    };

    const handleSubtaskAdd = (newSubtask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === newSubtask.parentId
                    ? {
                          ...task,
                          subtasks: task.subtasks ? [...task.subtasks, newSubtask] : [newSubtask],
                      }
                    : task
            )
        );
    };

    return (
        <ChartContainer>
            <TimeScale dateRange={dateRange} />
            <TaskList
                tasks={tasks}
                dateRange={dateRange}
                onTaskUpdate={handleTaskUpdate}
                onSubtaskAdd={handleSubtaskAdd}
            />
        </ChartContainer>
    );
};

export default GanttChart;

