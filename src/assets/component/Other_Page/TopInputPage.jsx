import React from "react";
import Menuber from "./Menuber";
import Table from "./Table";
import Footer from "./Footer";
import "./TopInputPage"

const InputPage = (props) => {
  const labelName = [
    "VISYS_DC_ID",
    "VISYS_DC_LOCATION",
    "VISYS_DC_URL",
    "VISYS_DC_PORT",
    "VISYS_DC_STATUS",
    "VISYS_DC_FLAG",
  ];

  return (
    <div className="input_page_wrap">
      <Menuber item={props.item} />
      <Table labelItem={labelName}/>
      <Footer/>
    </div>
  );
};

export default InputPage;
