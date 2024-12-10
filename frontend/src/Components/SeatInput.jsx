
import PropTypes from "prop-types";
import "../CSS/saet.css";

const SeatInput = ({ id, text, seat, onChange }) => {
  return (
    <div className="frm-chklabel">
      <label className="text">
        {text}
        <input
          type="number"
          className="seats-input"
          placeholder="0"
          max="30"
          min="0"
          aria-labelledby={`seat-input-${id}`}
          value={seat || ""}
          onChange={(e) => onChange(id, e.target.value)}
        />
      </label>
    </div>
  );
};

SeatInput.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.string.isRequired,
  seat: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SeatInput;
