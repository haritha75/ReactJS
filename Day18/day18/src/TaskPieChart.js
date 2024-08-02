import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const TaskPieChart = ({ taskId }) => {
  const [taskData, setTaskData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/admin/tasks/${taskId}`)
      .then((response) => {
        setTaskData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the task details!", error);
      });
  }, [taskId]);

  if (!taskData) {
    return <p>Loading...</p>;
  }

  const data = {
    labels: ["Progress", "Remaining"],
    datasets: [
      {
        data: [taskData.progress, 100 - taskData.progress],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div>
      <h2>Task Progress</h2>
      <Pie data={data} ref={chartRef} />
    </div>
  );
};

export default TaskPieChart;
