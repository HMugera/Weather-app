import React from "react";
import setRecommendation from "../../helperFunctions/setRecommendation";
import "./Recommendations.scss"

const Recommendation = ({ data }) => (
  <div className="infoWrapper">
    <div className="info">{setRecommendation(data.iconId)}</div>
  </div>
);

export default Recommendation;
