import  { useState } from "react";
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
