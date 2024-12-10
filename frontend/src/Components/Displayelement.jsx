import PropTypes from "prop-types";
import "../CSS/RadioComponent.css";

const handlechange = (val, changeselection) => {
  changeselection(val);
};

const Displayelement = ({ text, changeselection, data }) => {
  return (
    <div className={`form-chk-label ${data === text ? "active" : "inactive"}`} onClick={() => handlechange(text, changeselection)}>
      <span>{text}</span>
    </div>
  );
};

Displayelement.propTypes = {
  text: PropTypes.string.isRequired,
  changeselection: PropTypes.func.isRequired,
  data: PropTypes.any,
};

export default Displayelement;
