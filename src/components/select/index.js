import React, { useEffect, useState } from "react";
import "./styles.css";

const Select = ({ name, title, options, onChange, selectedFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    if (selectedFilters) {
      const sanitizedFilters = selectedFilters.split(", ");
      setSelection(sanitizedFilters);
    }
  }, []);

  const sanitize = (selection) => {
    let result = "";
    selection.forEach((element, i) => {
      result = result + element;
      if (selection.length - 1 !== i) {
        result = result + ", ";
      }
    });
    return result;
  };

  const clickHandler = (value) => {
    let newSelection;
    if (selection.includes(value)) {
      newSelection = selection.filter((v) => v !== value);
    } else {
      newSelection = [...selection, value];
    }
    setSelection(newSelection);
    // name: cuisine newselection: italian ejemplo
    onChange(name, sanitize(newSelection));
  };

  const onClickOutsideListener = () => {
    {
      isOpen && setIsOpen(!isOpen);
    }
    document.removeEventListener("click", onClickOutsideListener);
  };

  return (
    <div
      className="select-container"
      onMouseLeave={() => {
        document.addEventListener("click", onClickOutsideListener);
      }}
    >
      <div
        className={`value-container${isOpen ? "-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`} />
      </div>
      {isOpen && (
        <div className="options-container">
          {options.map(({ name, value }, i) => (
            <div
              key={i}
              className="option-container"
              onClick={() => clickHandler(value)}
            >
              <span>
                {name}
                {selection.includes(value) && <i className="fas fa-check"></i>}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
