import React from "react";
import setRecommendation from "../../utils/setRecommendation";
import "./Recommendations.scss";

const Recommendation = ({ data }) => (
	<div className="recommendationInfo">{setRecommendation(data.iconId)}</div>
);

export default Recommendation;
