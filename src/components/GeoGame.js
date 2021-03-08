import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const geoUrl = 'https://arithmo.toewsweb.net:3000/geopath/';
const geoCrossingsUrl = 'https://arithmo.toewsweb.net:3000/geocrossings/';
const geoFlagsUrl = 'https://arithmo.toewsweb.net:3000/geoflags';

const PathItem = styled.div`
	display: flex;

	div {
		width: 150px;
	}

	img {
		width: 50px;
	}
`;

function GeoGame(props) {
	const [ origin, setOrigin ] = useState();
	const [ destination, setDestination ] = useState();
	const [ crossings, setCrossings ] = useState();
	const [ path, setPath ] = useState([]);
	const [ flagList, setFlagList ] = useState([]);
	const [ randomCountry, setRandomCountry ] = useState();
	const [ challengePath, setChallengePath ] = useState();

	useEffect(async () => {
		var res = await fetch(geoFlagsUrl);
		res = await res.json();
		var data = res.data || res;
		setFlagList(data);
		pickOne();
	}, []);

	/* Pick a path from those identified. */
	useEffect(() => {
		if (path.length > 0) {
			var pathNdx = Math.floor(Math.random() * path.length);
			setChallengePath(path[pathNdx]);
			console.log('Challenge path', path[pathNdx]);
		}

	}, [path]);

	/* Origin or Crossings count has changed, so get list of border crossings with the specified number of crossings. */
	useEffect(async () => {
		if (origin && crossings) {
			var url = geoCrossingsUrl + `${origin}/${crossings}`;

			var res = await fetch(url);
			var res = await res.json();
			var data = res.data || res;
			if (data.paths.length > 0) {
				setPath(data.paths);
			} else {
				setPath([]);
			}
		}
	}, [origin, crossings ]);

	/* Origin or Destination has changed, so get list of border crossings between the countries. */
	useEffect(async () => {
		if (origin && destination) {
			var url = geoUrl + `${origin}/${destination}`;

			var res = await fetch(url);
			var res = await res.json();
			var data = res.data || res;
			if (data.reachedDest) {
				setPath(data.found);
			} else {
				setPath([]);
			}
		}
	}, [origin, destination ]);

	const pickOne = () => {
		var rndNdx = Math.floor(Math.random() * flagList.length);
		var randCountry = flagList[rndNdx] || {};
		setRandomCountry(randCountry);
		setOrigin(randCountry.countryName);
		setCrossings(2);
	}

	const Crossings = props => {
		const { path } = props;

		return (
			<PathItem>
			{ path.map((country, key) => {
				let countryRecord = flagList.find(item => item.countryName === country) || {};
				return <div key={key}>{country}<br/><img src={countryRecord.flagUrl} /></div>
			}) }
			</PathItem>
		);
	}

	const OriginDestination = styled.div`
		display: flex;

		div:nth-child(2) {
			width: 200px;
			font-size:3em;
			text-align: center;
		}
	`;

	const Challenge = props => {
		const { origin, destination } = props;
		const originFlag = flagList.find(item => item.countryName === origin).flagUrl;
		const destinationFlag = flagList.find(item => item.countryName === destination).flagUrl;

		return (
			<>
			<h4>The Challenge:</h4>
			<OriginDestination>
				<div><img src={originFlag} /></div>
				<div>?</div>
				<div><img src={destinationFlag} /></div>
			</OriginDestination>
			</>
		);
	}


	const FlagGrid = styled.div`
		display: grid;
		grid-template-columns: repeat(5, 70px);

		div {
			display: flex;
			justify-contents: center;
			padding: 5px;
		}

		img {
			width: 50px;
		}
	`;

	const FlagSelectionGrid = props => {
		if (flagList) {
			return (
				<FlagGrid>
				{ flagList.map((flag, key) => {
					return <div key={key} onClick={handleClickedFlag} data-country={flag.countryName}><img src={flag.flagUrl} /></div>
				}) }
				</FlagGrid>
		);
		}
	}


	const handleClickedFlag = e => {
		e.preventDefault();
		var el = e.currentTarget;
		console.log('clicked', el.dataset.country);
	}

	const handleSetOrigin = e => {
		e.preventDefault();
		setOrigin(e.target.value);
	}

	const handleSetDestination = e => {
		e.preventDefault();
		setDestination(e.target.value);
	}

	const handleSetCrossings = e => {
		e.preventDefault();
		setCrossings(e.target.value);
	}

	return (
		<div className="container">
			<button className="btn btn-info" onClick={pickOne}>Random Country</button>
		{/*
			<div>
				<input type="text" name="origin" onBlur={handleSetOrigin} />
			</div>
			<div>
				<input type="text" name="destination" onBlur={handleSetDestination} />
			</div>
			<div>
				<input type="text" name="crossings" onBlur={handleSetCrossings} />
			</div>
		*/}

			{ randomCountry && challengePath && (
				<Challenge origin={challengePath[0]} destination={challengePath[challengePath.length - 1]} />
			) }


		{/*
			{ path.length > 0 && (
				<div>
			<h3>Border Crossings</h3>
			{ path.map && path.map((p, key) => <Crossings key={key} path={p} />) }
				</div>
			) }
		*/}
			<FlagSelectionGrid />


		</div>
	);
}

export default GeoGame;
