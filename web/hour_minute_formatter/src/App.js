import React, { useEffect, useRef } from 'react';

import { getData, treatColon, treatMinuteSecond, treatMultipleMixedSeries, treatMultipleSeries, treatPeriod, treatSingleSeries, treatWeight } from './util/part';

import './App.css';

function componentDidMount(props) {
	document.body.classList.add('container');
}

function App(props) {

	const didMountRef = useRef(false);

	useEffect(() => {
		if (didMountRef.current) {
			// componentDidUpdate(props, prevProps);
		} else {
			didMountRef.current = true;
			componentDidMount(props);
		}
	});

	return <><textarea className='input' id='input' /><textarea className='output' id='output' /><input className='button event-times' onClick={() => {
		let input = document.getElementById("input");
		let output = document.getElementById("output");
		output.value = input.value.replace(/^([0-9]{2})([0-9]{2})/gim, '$1:$2. ');
	}} type='button' value='event times' /><input className='button gym' onClick={() => {
		let input = document.getElementById("input");
		let output = document.getElementById("output");
		let lineList = input.value.split('\n');
		lineList = lineList.map(line => [({
			data: line,
			treated: false
		})]);
		lineList = lineList
			.map(treatPeriod)
			.map(treatColon)
			.map(treatWeight)
			.map(treatMinuteSecond)
			.map(treatMultipleMixedSeries)
			.map(treatMultipleSeries)
			.map(treatSingleSeries)
			.map(line => line.map(getData).join(''));
		// output.value = JSON.stringify(lineList);
		output.value = lineList.join('\n');
	}} type='button' value='workout' /></>;
}

export default App;
