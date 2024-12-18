import React, { useState, useRef, useEffect } from 'react';
import { calculateDateFromPosition } from '../utils/dateUtils';

import {
    TaskRow,
    TaskLabel,
    TaskBarContainer,
    TaskBarStyled,
    TaskBarText,
    Resizer
} from '../TaskBar/TaskBar.styled';

const TaskBar = ({ task, dateRange, onTaskUpdate }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [resizeSide, setResizeSide] = useState(null);
    const [initialMouseX, setInitialMouseX] = useState(0);
    const [initialLeft, setInitialLeft] = useState(0);
    const [initialWidth, setInitialWidth] = useState(0);

    const taskBarRef = useRef(null);

    const [style, setStyle] = useState({
        left: task.left || 0,
        width: task.width || 0,
        startDate: task.startDate,
        endDate: task.endDate,
    });

    const containerRef = useRef(null);

    useEffect(() => {
        if (taskBarRef.current) {
            containerRef.current = taskBarRef.current.parentElement;
        }
    }, []);

    const handleDragStart = (e) => {
        e.preventDefault();
        if (isResizing) return;

        setIsDragging(true);
        setInitialMouseX(e.clientX);
        setInitialLeft(style.left);
    };

    const handleResizeStart = (side) => (e) => {
        e.preventDefault();
        setIsResizing(true);
        setResizeSide(side);
        setInitialMouseX(e.clientX);
        setInitialLeft(style.left);
        setInitialWidth(style.width);
    };

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;
        const deltaX = e.clientX - initialMouseX;

        if (isDragging) {
            const newLeft = Math.max(0, initialLeft + deltaX);
            const newStartDate = calculateDateFromPosition(newLeft, containerWidth, dateRange);
            const newEndDate = calculateDateFromPosition(newLeft + style.width, containerWidth, dateRange);

            setStyle((prev) => ({
                ...prev,
                left: newLeft,
                startDate: newStartDate,
                endDate: newEndDate,
            }));
        }

        if (isResizing) {
            let newLeft = style.left;
            let newWidth = style.width;

            if (resizeSide === 'left') {
                newLeft = Math.max(0, initialLeft + deltaX);
                newWidth = Math.max(20, initialWidth - deltaX);
            } else if (resizeSide === 'right') {
                newWidth = Math.max(20, initialWidth + deltaX);
            }

            const newStartDate = calculateDateFromPosition(newLeft, containerWidth, dateRange);
            const newEndDate = calculateDateFromPosition(newLeft + newWidth, containerWidth, dateRange);

            setStyle({
                left: newLeft,
                width: newWidth,
                startDate: newStartDate,
                endDate: newEndDate,
            });
        }
    };

    const handleMouseUp = () => {
        if (isDragging || isResizing) {
            setIsDragging(false);
            setIsResizing(false);
            setResizeSide(null);

            onTaskUpdate({
                ...task,
                left: style.left,
                width: style.width,
                startDate: style.startDate,
                endDate: style.endDate,
            });
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    });

    return (
        <TaskRow>
            <TaskLabel>{task.name}</TaskLabel>
            <TaskBarContainer>
                <TaskBarStyled
                    ref={taskBarRef}
                    style={{
                        left: `${style.left}px`,
                        width: `${style.width}px`,
                    }}
                    color={task.color || '#2196f3'}
                    hoverColor={task.hoverColor || '#35485b'}
                    onMouseDown={handleDragStart}
                >
                    <Resizer className="left" onMouseDown={handleResizeStart('left')} />
                    <TaskBarText>{`${style.startDate} - ${style.endDate}`}</TaskBarText>
                    <Resizer className="right" onMouseDown={handleResizeStart('right')} />
                </TaskBarStyled>
            </TaskBarContainer>
        </TaskRow>
    );
};

export default TaskBar;



