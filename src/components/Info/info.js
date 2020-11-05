import React from "react";
import getInfo from "../../helpers/getInfo";
import "./info.scss";

const Info = ({ data }) => (
  <div className="infoWrapper">
    <div className="info">{getInfo(data.iconId)}</div>
  </div>
);

export default Info;
