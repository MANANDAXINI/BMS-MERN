import  { useContext } from "react";
import { movieslot } from "../data";  // Assuming movie slot data is stored here
import Contextuse from "./Context/CreateContext";
import Displayelement from "./Displayelement";  // Assuming Displayelement is a custom component
import "../CSS/TimeSchedule.css"

const TimeSchedule = () => {
  const { time, changetime } = useContext(Contextuse); // Using context to get and set time

  return (
    <div className="slotcontainer">
      <h1 className="tsheading">Select A Schedule</h1>
      <div className="tsmain">
        {movieslot.map((ele, index) => (
          <Displayelement
            key={index}
            text={ele}
            changeselection={changetime}
            data={time}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeSchedule;
