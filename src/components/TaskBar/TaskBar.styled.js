import styled from 'styled-components';

const TaskRow = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;

`;


const TaskLabel = styled.div`
    width: 120px;
    font-size: 12px;
    font-weight: bold;
    padding-right: 10px;
    text-align: right;
    color: #555;

`;


const TaskBarContainer = styled.div`
    flex: 1;
    position: relative;
    height: 30px;
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;

    @media (max-width: 768px) {
        height: 70px;
    }
`;


// const TaskBarStyled = styled.div`
//     position: absolute;
//     height: 100%;
//     background: ${(props) => props.color};
//     border-radius: 5px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//     animation: fadeIn 0.5s ease-in;

//     &:hover {
//         background: ${(props) => props.hoverColor};
//         cursor: pointer;
//         transition: background 0.3s ease;
//     }
   
// `;

const TaskBarStyled = styled.div`
    position: absolute;
    height: 100%;
    background: ${(props) => props.color};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: left 0.1s ease, width 0.1s ease;

    &:hover {
        background: ${(props) => props.hoverColor};
        cursor: pointer;
    }
`;

const TaskBarText = styled.span`
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;

    @media (max-width: 768px) {
        font-size: 10px;
        padding: 5px;
    }

    @media (max-width: 480px) {
        /* display: none; */
        font-size: 10px;
    }
`;

const Resizer = styled.div`
    width: 10px;
    height: 100%;
    position: absolute;
    top: 0;
    cursor: ew-resize;
    background: rgba(0, 0, 0, 0.1);
    z-index: 10;

    &.left {
        left: 0;
    }

    &.right {
        right: 0;
    }

    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }
`;


export {TaskRow, TaskLabel,TaskBarContainer,TaskBarStyled,TaskBarText,Resizer  }