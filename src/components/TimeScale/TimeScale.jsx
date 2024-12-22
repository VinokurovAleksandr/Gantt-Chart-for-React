// import React from 'react';

// import {
//     ScaleContainer, 
//     TimeCell
// } from './TimeScale.styled';


// const TimeScale = ({ dateRange }) => {
//     return (
//         <ScaleContainer>
//             {dateRange.map((date) => (
//                 <TimeCell key={date}>{date}</TimeCell>
//             ))}
//         </ScaleContainer>
//     );
// };


// export default TimeScale;


// 


import React from 'react';
import { ScaleContainer, TimeCell } from './TimeScale.styled';

const TimeScale = ({ dateRange }) => {
    const cellWidth = 100 / dateRange.length; // Dynamic width based on the number of dates

    return (
        <ScaleContainer>
            {dateRange.map((date) => (
                <TimeCell key={date} style={{ width: `${cellWidth}%` }}>
                    {date}
                </TimeCell>
            ))}
        </ScaleContainer>
    );
};

export default TimeScale;


