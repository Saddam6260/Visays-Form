import React, { useState } from "react";
import "./TopInputSet.css";

const Table = () => {
  const [dcId, setDcId] = useState("");
  const [dcLocation, setDcLocation] = useState("");
  const [dcUrl, setDcUrl] = useState("");
  const [dcPort, setDcPort] = useState("");
  const [dcStatus, setDcStatus] = useState("");
  const [dcFlag, setDcFlag] = useState("");

  const takeDcId = (event) => {
    setDcId(event.target.value);
  };
  const takeDcLocation = (event) => {
    setDcLocation(event.target.value);
  };
  const takeDcUrl = (event) => {
    setDcUrl(event.target.value);
  };
  const takeDcPort = (event) => {
    setDcPort(event.target.value);
  };
  const takeDcStatus = (event) => {
    setDcStatus(event.target.value);
  };
  const takeDcFlag = (event) => {
    setDcFlag(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const topAllInputData = {
      idData: dcId,
      locationData: dcLocation,
      urlData: dcUrl,
      portData: dcPort,
      statusData: dcStatus,
      flagData: dcFlag,
    };
    console.log(topAllInputData);
    setDcId("")
    setDcLocation("")
    setDcStatus("")
    setDcPort("")
    setDcUrl("")
    setDcFlag("")
  };

  return (
    <div className="topFormWrap">
      <form onSubmit={onSubmitHandler}>
        <div className="toptable_wrap">
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_ID</label>
            <input type="text" value={dcId} onChange={takeDcId} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_LOCATION</label>
            <input type="text" value={dcLocation} onChange={takeDcLocation} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_URL</label>
            <input type="text" value={dcUrl} onChange={takeDcUrl} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_PORT</label>
            <input type="text" value={dcPort} onChange={takeDcPort} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_STATUS</label>
            <input type="text" value={dcStatus} onChange={takeDcStatus} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_FLAG</label>
            <input type="text" value={dcFlag} onChange={takeDcFlag} />
          </div>
        </div>
        <div className="topinputsubmit_btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Table;
