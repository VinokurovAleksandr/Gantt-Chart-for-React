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


