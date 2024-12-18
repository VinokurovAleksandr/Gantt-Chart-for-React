import React from 'react';

import {
    ScaleContainer, 
    TimeCell
} from './TimeScale.styled';


const TimeScale = ({ dateRange }) => {
    return (
        <ScaleContainer>
            {dateRange.map((date) => (
                <TimeCell key={date}>{date}</TimeCell>
            ))}
        </ScaleContainer>
    );
};


export default TimeScale;


