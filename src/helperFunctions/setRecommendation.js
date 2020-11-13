import React from "react";

const getInfo = (code) => {
	switch (code) {
		case 800:
			return (
				<p>
					Clear skys perfect time for flying,or rather lets take a walk carry
					your hat and those sunglasses that make you look cool{" "}
					<span role="img" aria-label="Glasses"></span>😎
				</p>
			);

		case 801: //few clouds
			return (
				<p>
					We heros always have to look clean,its a perfect day to do laudry,let
					me wash my cape
				</p>
			);

		case 802: //scattered clouds
			return (
				<p>
					Flying is hard today with all this love in the air. Call up that
					special someone lets make it a coffee date{" "}
					<span role="img" aria-label="Coffee">
						☕️
					</span>{" "}
				</p>
			);

		case 803: //broken clounds
			return (
				<p>
					Great day for some outside exercise,we have to get fit to keep up with
					the bad guys{" "}
					<span role="img" aria-label="Hand">
						💪
					</span>
				</p>
			);

		case 804: //overcast clounds
			return (
				<p>
					Time to watch other heros save the world. Netflix and chill today
					would be awsome with the pleasant weather outside
				</p>
			);

		case 500: //light rain
			return (
				<p>
					The kind of weather actors dance around in movies,lets carry that warm
					sweather just incase
				</p>
			);

		case 501: //moderate rain
			return (
				<p>
					A bit more rain,that sweather and an umbrella should do the trick{" "}
				</p>
			);

		case 502: //heavy intesity
			return (
				<p>
					The rains have come its time to get our gear right,Gumboots{" "}
					<span role="img" aria-label="Tick">
						✔️
					</span>
					,raincoat{" "}
					<span role="img" aria-label="Tick">
						✔️
					</span>{" "}
					and an ambrella{" "}
					<span role="img" aria-label="Tick">
						✔️
					</span>
				</p>
			);
		case 503: // very heavy intesity
			return (
				<p>
					It seems noahs times are back the rain today is insane,lets build an
					ark or something
				</p>
			);
		case 520: // very heavy intesity
			return (
				<p>
					The kind of weather actors dance around in movies,lets carry that warm
					sweather just incase
				</p>
			);

		case 600: //ligth snow
			return (
				<p>
					Light snow lets dress warmly and go make a snow man outside{" "}
					<span role="img" aria-label="Snowman">
						&#9731;
					</span>
				</p>
			);

		case 601: //snow
			return <p>its snowing outside lets stick indoors </p>;

		case 602: //heavy snow
			return (
				<p>
					Now the snow seems to be getting personal but its okay lets start up
					that fireplace fire
				</p>
			);

		case 200: //thunderstorm
			return (
				<p>
					Just got struck by lightning flying in this thunderstorm is
					unbearable,better keep indoors
				</p>
			);

		case 201: //thunderstorm
			return (
				<p>
					Just got struck by lightning flying in this thunderstorm is
					unbearable,better keep indoors
				</p>
			);

		case 300: //light intesity drizzle
			return <p>Well, a bit of rain never killed anyone</p>;

		case 301: //drizzle
			return (
				<p>
					Rain, but not terminal. Wear a coat i dont want you to catch a coldor
					something
				</p>
			);

		case 302: //heavy intesity drizzle
			return <p>Rain, of the annoying variety. Don't get caught out</p>;

		case 701: //mist
			return (
				<p>
					The air is thick with mist and there's just barely a light rain. Tread
					carefully
				</p>
			);

		case 711: //smoke
			return (
				<p>
					Smoke warning - potential forest fire hazard. Be extremely vigilant
					and on the lookout for the most up to date weather advisories
				</p>
			);

		case 721: //haze
			return <p>The sun's out but it's hazy.Lazy days are made of this</p>;

		case 731: //dust
			return (
				<p>Like walking out in the Sahara is what it looks like out there.</p>
			);
		case 741: //fog
			return (
				<p>
					Foggy weather. Visibility severely impacted. Take extreme care when
					driving if you must.
				</p>
			);
		default:
			return <p>Todays weather is great</p>;
	}
};
export default getInfo;
