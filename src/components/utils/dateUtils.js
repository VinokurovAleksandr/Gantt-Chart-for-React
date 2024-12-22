import { format, addDays, differenceInDays } from 'date-fns';


export const getDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dates = [];

    while (start <= end) {
        dates.push(start.toISOString().split('T')[0]);
        start.setDate(start.getDate() + 1);
    }

    return dates;
};



export const calculateBarPosition = (task, dateRange) => {
    const taskStart = new Date(task.startDate);
    const taskEnd = new Date(task.endDate);
    const totalDays = dateRange.length;

    const startOffset = (taskStart - new Date(dateRange[0])) / (1000 * 60 * 60 * 24);
    const taskDays = (taskEnd - taskStart) / (1000 * 60 * 60 * 24) + 1;

    const left = (startOffset / totalDays) * 100;
    const width = (taskDays / totalDays) * 100;

    return { left, width };
};

export const extendDateRange = (currentRange, newStartDate, newEndDate) => {

    const currentStart = currentRange[0];
    const currentEnd = currentRange[currentRange.length - 1];


    const updatedStart = newStartDate < currentStart ? newStartDate : currentStart;
    const updatedEnd = newEndDate > currentEnd ? newEndDate : currentEnd;

    return getDateRange(updatedStart, updatedEnd);
};


export const calculateDateFromPosition = (position, containerWidth, dateRange) => {
    const totalDays = differenceInDays(new Date(dateRange[dateRange.length - 1]), new Date(dateRange[0]));
    const dayPerPixel = totalDays / containerWidth;

    const dayOffset = Math.round(position * dayPerPixel);
    const newDate = addDays(new Date(dateRange[0]), dayOffset);

    return format(newDate, 'yyyy-MM-dd');
};







