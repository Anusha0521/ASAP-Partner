import "./TaskStyles.css";
import TaskData from "./TaskData.js";
import Service1 from "../assets/calender.jpeg";
import Service2 from "../assets/seekers.jpg";
import Service3 from "../assets/devices.jpg";

function Task() {
  return (
    <div className="task">
      <h1>Assets</h1>
      <p>ASAP provides the below advantages</p>
      <div className="taskcard">
        <TaskData
          image={Service1}
          heading="Flexibility"
          text="More flexibility in your job postings: start and stop
        duration of jobs at any time."
        />
        <TaskData
          image={Service2}
          heading="Exposure"
          text="Exposure to millions of active seekers."
        />
        <TaskData
          image={Service3}
          heading="Optimization"
          text="Optimization across devices to drive engagement with
        mobile-friendly job experience."
        />
      </div>
    </div>
  );
}

export default Task;
