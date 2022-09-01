import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./Collapse.css";
import ArrowDown from "../arrow/ArrowDown";
import ArrowUp from "../arrow/ArrowUp";

const Collapse = ({ title, description, house__desc, house__equi }) => {
  const [show, setShow] = useState(false);
  const [secondShow, setSecondShow] = useState(false);
  const location = useLocation();

  const toggleHandler = () => {
    setShow(!show);
  };

  const secondToggleHandler = () => {
    setSecondShow(!secondShow)
  }


  if (location.pathname === "/about") {
    return (
      <div>
        <div className="collapse__title">
          <h2>{title}</h2>
          <button onClick={toggleHandler}>{show ? <ArrowUp /> : <ArrowDown />}</button>
        </div>
        {show ? (
          <div className="collapse__description">
            <p>{description}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
  if (location.pathname !== "/about") {
    return (
      <div>
        <div className="collapse__title">
          <h2>Description</h2>
          <button onClick={toggleHandler}>{show ? <ArrowUp /> : <ArrowDown />}</button>
        </div>
        {show ? (
          <div className="collapse__description">
            <p>{house__desc}</p>
          </div>
        ) : (
          ""
        )}
         <div className="collapse__title">
          <h2>Equipements</h2>
          <button onClick={secondToggleHandler}>{secondShow ? <ArrowUp /> : <ArrowDown />}</button>
        </div>
        {secondShow ? (
          <div className="collapse__description">
            <p>{house__desc}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
};

Collapse.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  house__desc: PropTypes.string,
  house__equi: PropTypes.array
};

export default Collapse;
