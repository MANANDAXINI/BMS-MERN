import  { useContext } from "react";
import { seats } from "../data"; // Assuming this data file is correct
import Contextuse from "./Context/CreateContext";
import SeatInput from "./SeatInput";  // Assuming SeatInput component is correct
import "../CSS/SeatInput.css"

const SelectSeats = () => {
  const { seat, noofseat } = useContext(Contextuse);

  // Handle seat changes
  const handleSeatChange = (id, value) => {
    noofseat((prev) => ({
      ...prev,
      [id]: value, // Update the specific seat value
    }));
  };

  return (
    <div className="seatcon">
      <h1 className="headseat">Select Seats</h1>
      <div className="mapp">
        {seats.map((ele, index) => (
          <SeatInput
            key={index}
            id={ele}
            text={ele}
            seat={seat[ele]}
            onChange={handleSeatChange}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectSeats;
