import React from "react";
import setRecommendation from "../../helperFunctions/setRecommendation";
import "./Recommendations.scss";

const Recommendation = ({ data }) => (
	<div className="info">{setRecommendation(data.iconId)}</div>
);

export default Recommendation;
