import React from "react";
import GanttChart from "./components/GantChart/GanttChart";

// const tasks = [
//   { id: '1', name: 'Project Planning', startDate: '2024-12-01', endDate: '2024-12-13', color: '#4caf50' },
//   { id: '2', name: 'Development', startDate: '2024-12-01', endDate: '2024-12-19', color: '#2196f3' },
//   { id: '3', name: 'Testing', startDate: '2024-12-01', endDate: '2024-12-24', color: '#ff9800' },
// ];

const initialTasks = [
  {
      id: '1',
      name: 'Project Planning',
      startDate: '2024-12-01',
      endDate: '2024-12-13',
      color: '#4caf50',
      subtasks: [
          {
              id: 'subtask-1',
              name: 'Subtask 1.1',
              startDate: '2024-12-01',
              endDate: '2024-12-02',
              parentId: 'task-1',
          },
      ],
  },
  {
      id: '2',
      name: 'Development',
      startDate: '2024-12-03',
      endDate: '2024-12-19',
      color: '#2196f3',
  },
  {
      id: '3',
      name: 'Testing',
      startDate: '2024-12-20',
      endDate: '2024-12-24',
      color: '#ff9800',
  },
];


function App() {
  return (
    <div>
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Gantt Chart</h1>
            <GanttChart  initialTasks={initialTasks} startDate="2024-12-01" endDate="2024-12-31" />

        </div>
    </div>

  );
}

export default App;


