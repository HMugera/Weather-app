import React from "react";
import getInfo from "../../helpers/getInfo";
import "./info.scss";

const Info = ({data}) => (
  <div className="infoWrapper">
    <p className="info">
      {getInfo(data.iconId)}
      {/* Doing what heros do best,am here me save your day.With this cold weather
      that trenchcoat will definetly keep you warm, */}
      {/* Ahh! Not a bad day for flying,or rather lets take a stroll,a late afternoon
       run round the block, i promise i wont use my super human speed😉 */}
    </p>
  </div>
);

export default Info;
