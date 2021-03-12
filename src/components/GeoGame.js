import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import geo_flags from './geo_flags.json';
import geo_borders from './geo_borders.json';

// Filter out countries that don't have borders.
const flagsWithBorders = geo_flags.filter(flag => {
	var countryRecord = geo_borders.find(item => item.country === flag.countryName);
	return countryRecord && countryRecord.borders.length > 0;
});;

const geoUrl = 'https://arithmo.toewsweb.net:3000/geopath/';
const geoCrossingsUrl = 'https://arithmo.toewsweb.net:3000/geocrossings/';

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
	const [ randomCountry, setRandomCountry ] = useState();
	const [ challengePath, setChallengePath ] = useState();
	const [ bordering, setBordering ] = useState([]);
	const [ correctBordering, setCorrectBordering ] = useState([]);
	const [ refreshFlags, setRefreshFlags ] = useState(false);
	const flagList = flagsWithBorders;

	// First load: pick a country with borders.
	useEffect(async () => {
		pickOne();
	}, []);

	// When path changes: Pick a path from those identified.
	useEffect(async () => {
		if (path.length > 0) {
			var pathNdx = Math.floor(Math.random() * path.length);
			var randPath = path[pathNdx];
			var dest = randPath[randPath.length - 1];


			var url = geoCrossingsUrl + `${origin}/1`;
			var res = await fetch(url);
			var res = await res.json();
			var data = res.data || res;
			var origBordering = data.paths.map(path => path[1]);
//			console.log('bordering countries for origin', origBordering);

			var url = geoCrossingsUrl + `${dest}/1`;
			var res = await fetch(url);
			var res = await res.json();
			var data = res.data || res;
			var destBordering = data.paths.map(path => path[1]);
//			console.log('bordering countries for destination', destBordering);


			var validPaths = path.filter(p => p[p.length - 1] === dest);
			var correctCountries = validPaths.map(path => path.slice(1, path.length - 1)).flat();
//			console.log('bordering countries', correctBordering);
			var bordering = [...origBordering, ...destBordering, ...correctCountries];

			setChallengePath(path[pathNdx]);
			setBordering(bordering);
			setCorrectBordering(correctCountries);
			setRefreshFlags(true);
		}

	}, [path]);

	// Origin or Crossings count has changed, so get list of border crossings with the specified number of crossings.
	useEffect(async () => {
		setRefreshFlags(false);
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
	/*
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
	*/

	const pickOne = () => {
		var rndNdx = Math.floor(Math.random() * flagList.length);
		var randCountry = flagList[rndNdx] || {};
		console.log('Pick One', rndNdx, randCountry);
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
		var originFlagObj = flagList.find(item => item.countryName === origin);
		var destinationFlagObj = flagList.find(item => item.countryName === destination);
		const originFlag = originFlagObj ? originFlagObj.flagUrl : '';
		if (!originFlag) console.log('No flag URL found for origin', origin);
		const destinationFlag = destinationFlagObj ? destinationFlagObj.flagUrl : '';
		if (!destinationFlag) console.log('No flag URL found for destination', destination);

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
		var borderingCountries = JSON.stringify(bordering);

		if (flagList) {
			var multipleChoiceFlags = flagList.filter(flag => {
				let isBordering = borderingCountries.indexOf(flag.countryName) !== -1;
				return isBordering;
			});

			return (
				<FlagGrid>
				{ multipleChoiceFlags.map((flag, key) => {
					return <div key={key} onClick={handleClickedFlag} data-country={flag.countryName}><img src={flag.flagUrl} /></div>
				}) }
				</FlagGrid>
		);
		}
	}


	const handleClickedFlag = e => {
		e.preventDefault();
		var el = e.currentTarget;
		var selectedCountry = el.dataset.country;
		if (correctBordering.indexOf(selectedCountry) !== -1) {
			console.log('Correct!', selectedCountry, correctBordering);
			pickOne();
		}
		console.log('clicked', correctBordering);
	}


	return (
		<div className="container">
			<button className="btn btn-info" onClick={pickOne}>Random Country</button>

			{ refreshFlags && randomCountry && challengePath && (
				<>
				<Challenge origin={origin} destination={challengePath[challengePath.length - 1]} />
				<FlagSelectionGrid />
				</>
			) }



		</div>
	);
}

export default GeoGame;
