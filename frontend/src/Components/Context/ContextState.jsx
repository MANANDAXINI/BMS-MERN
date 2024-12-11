import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Contextuse from "./CreateContext"; // Import the context

const Contextstate = ({ children }) => {
  const [movie, changemovie] = useState(""); // Movie state
  const [time, changetime] = useState(""); // Time state
  const [seat, noofseat] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
    D3: "",
    D4: "",
  });
  const [lastbookingdetails, setlastbookingdetails] = useState(null);
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // POST request to handle data submission
  const handledata = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/booking', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          movie: movie,
          time: time,
          seats: seat // Ensure this matches your backend schema
        })
      });

      const data = await response.json();

      // Show the error popup with the response message
      setErrorPopup(true);
      setErrorMessage(data.message);

      if (response.status === 200) {
        // Clear form inputs and update booking details
        changemovie("");
        changetime("");
        noofseat({
          A1: "",
          A2: "",
          A3: "",
          A4: "",
          D1: "",
          D2: "",
          D3: "",
          D4: "",
        });
        setlastbookingdetails(data.data);

        // Clear localStorage
        window.localStorage.clear();
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setErrorPopup(true);
      setErrorMessage("Something went wrong, please try again.");
    }
  };

  // GET request to fetch booking details
  const handlegetbooking = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/booking`, {
        method: "GET",
      });

      const data = await response.json();

      if (response.ok) {
        setlastbookingdetails(data.data);
      } else {
        setErrorPopup(true);
        setErrorMessage(data.message || "Failed to fetch booking details.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setErrorPopup(true);
      setErrorMessage("Something went wrong while fetching booking details.");
    }
  };

  // Fetch initial data from localStorage
  useEffect(() => {
    const movie = window.localStorage.getItem('movie');
    const time = window.localStorage.getItem('time');
    const seat = window.localStorage.getItem('seat');

    if (movie) changemovie(movie);
    if (time) changetime(time);
    if (seat) noofseat(JSON.parse(seat));
  }, []);

  return (
    <Contextuse.Provider
      value={{
        movie,
        changemovie,
        time,
        changetime,
        seat,
        noofseat,
        lastbookingdetails,
        setlastbookingdetails,
        handledata,
        handlegetbooking,
        errorMessage,
        errorPopup,
        setErrorPopup,
      }}
    >
      {children} {/* Render children components */}
    </Contextuse.Provider>
  );
};

Contextstate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Contextstate;
