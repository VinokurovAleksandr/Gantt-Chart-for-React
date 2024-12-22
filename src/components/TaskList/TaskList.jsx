import React from 'react';
import TaskBar from '../TaskBar/TaskBar';
import { TaskListContainer, TaskListItem, SubtaskList, AddSubtaskButton } from './TaskList.styled';

const TaskList = ({ tasks, dateRange, onTaskUpdate, onSubtaskAdd }) => {
    const handleSubtaskAdd = (parentTaskId) => {
        const newSubtask = {
            id: `subtask-${Date.now()}`,
            name: 'New Subtask',
            startDate: dateRange[0],
            endDate: dateRange[0],
            parentId: parentTaskId,
        };
        onSubtaskAdd(newSubtask);
    };

    return (
        <TaskListContainer>
            {tasks.map((task) => (
                <div key={task.id}>
                    <TaskListItem>
                        <TaskBar
                            task={task}
                            dateRange={dateRange}
                            onTaskUpdate={(updatedTask) => onTaskUpdate(updatedTask)}
                        />
                        {task.subtasks && (
                            <SubtaskList>
                                {task.subtasks.map((subtask) => (
                                    <TaskBar
                                        key={subtask.id}
                                        task={subtask}
                                        dateRange={dateRange}
                                        onTaskUpdate={(updatedTask) => onTaskUpdate(updatedTask)}
                                    />
                                ))}
                            </SubtaskList>
                        )}
                    </TaskListItem>
                    <AddSubtaskButton onClick={() => handleSubtaskAdd(task.id)}>
                        + Add Subtask
                    </AddSubtaskButton>
                </div>
            ))}
        </TaskListContainer>
    );
};

export default TaskList;
