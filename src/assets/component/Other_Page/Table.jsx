import React from "react";
import "./Table.css";

const Table = (props) => {
  return (
      <form className="table_wrap">
        {props.labelItem.map((item, index) => (
          <div key={index} className="input_wrapper">
            <label htmlFor="">{item}</label>
            <input type="text" />
          </div>
        ))}

        <button type="submit"></button>
      </form>
  );
};

export default Table;
