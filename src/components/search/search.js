import React from "react";
import "./search.scss";

export default function Search({ getCityWeather, changeLocation, isError }) {
	return (
		<div>
			<div className="search-bar">
				<form
					className="region"
					onSubmit={(e) => {
						getCityWeather(e);
					}}
				>
					<input
						type="text"
						spellCheck="false"
						onChange={(e) => {
							changeLocation(e.target.value);
						}}
						className="regioninput"
						autoComplete="off"
						required
					/>
					<label htmlFor="input" className="label">
						<span className="content-name">
							<i className="fas fa-search"></i> Search City
						</span>
					</label>

					{isError ? (
						<label htmlFor="input" className="label">
							<span className="error">Location not found</span>
						</label>
					) : null}
				</form>
			</div>
		</div>
	);
}
