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

    const [initialPositionX, setInitialPositionX] = useState(0);
    const [initialLeft, setInitialLeft] = useState(0);
    const [initialWidth, setInitialWidth] = useState(0);

  

    const taskBarRef = useRef(null);
    const containerRef = useRef(null);

    const [style, setStyle] = useState({
        left: task.left || 0,
        width: task.width || 0,
        startDate: task.startDate,
        endDate: task.endDate,
    });

    useEffect(() => {
        if (taskBarRef.current) {
            containerRef.current = taskBarRef.current.parentElement;
        }
    }, []);

    
    const getEventPosition = (event) => {
        if (event.touches) {
           
            return event.touches[0].clientX;
        }
        
        return event.clientX;
    };

    const handleStart = (event, type = 'drag') => {
        // event.preventDefault();
        const positionX = getEventPosition(event);

        if (type === 'drag') {
            setIsDragging(true);
            setInitialPositionX(positionX);
            setInitialLeft(style.left);
        } else if (type === 'resize') {
            setIsResizing(true);
            setResizeSide(event.target.classList.contains('left') ? 'left' : 'right');
            setInitialPositionX(positionX);
            setInitialLeft(style.left);
            setInitialWidth(style.width);
        }
    };

    const handleMove = (event) => {
        if (!containerRef.current || (!isDragging && !isResizing)) return;

        const positionX = getEventPosition(event);
        const deltaX = positionX - initialPositionX;
        const containerWidth = containerRef.current.offsetWidth;

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
                newWidth = Math.max(20, initialWidth - deltaX); // Мінімальна ширина: 20px
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

    const handleEnd = () => {
        if (isDragging || isResizing) {
            setIsDragging(false);
            setIsResizing(false);
            setResizeSide(null);

            onTaskUpdate({
                ...task,
                startDate: style.startDate,
                endDate: style.endDate,
            });
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchmove', handleMove);
        window.addEventListener('touchend', handleEnd);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
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
                    onMouseDown={(e) => handleStart(e, 'drag')}
                    onTouchStart={(e) => handleStart(e, 'drag')}
                >
                    <Resizer
                        className="left"
                        onMouseDown={(e) => handleStart(e, 'resize')}
                        onTouchStart={(e) => handleStart(e, 'resize')}
                    />
                    <TaskBarText>{`${style.startDate} - ${style.endDate}`}</TaskBarText>
                    <Resizer
                        className="right"
                        onMouseDown={(e) => handleStart(e, 'resize')}
                        onTouchStart={(e) => handleStart(e, 'resize')}
                    />
                </TaskBarStyled>
            </TaskBarContainer>
        </TaskRow>
    );
};

export default TaskBar;


