import SelectMovie from "../Components/SelectMovie";
import LastBookingDetails from "../Components/LastBokkingDetails"; // Corrected typo
import TimeSchedule from "../Components/TimeSchedule";
import SelectSeats from "../Components/SelectSeats";
import "../CSS/Home.css";
import { useContext } from "react";
import Contextuse from "../Components/Context/CreateContext";

const Home = () => {
  const context = useContext(Contextuse);

  const {
    handledata, // Renamed to align with its functionality
    movie,
    time,
    seat,
    setErrorMessage,
    setErrorPopup,
  } = context;

  const handlesBooking = () => {
    if (!movie) {
      setErrorMessage("Select a Movie");
      setErrorPopup(true);
    } else {
      handledata(); // Corrected function call
    }
  };

  return (
    <>
      <div className="puradabba">
        <div className="firstsection">
          <div className="Selectmovcontainer">
            <SelectMovie />
          </div>
          <div className="rightfirst">
            <LastBookingDetails />
          </div>
        </div>

        <div className="nicheka">
          <SelectSeats />
          <TimeSchedule />

          <button className="btn" onClick={handlesBooking}>
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
