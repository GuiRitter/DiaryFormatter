import React, { useEffect, useRef } from 'react';

import { getData, treatColon, treatMinuteSecond, treatMultipleMixedSeries, treatMultipleSeries, treatPeriod, treatSingleSeries, treatWeight } from './util/part';

import './App.css';

const moment = require('moment');

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
		output.value = input.value
			.replace(/^([0-9]{2})([0-9]{2})/gim, '$1:$2. ')
			.replace(/^(.+)([^ \n]{1})$/gim, '$1$2 ')
			.replace(/^Estou aqui: (.+)°[ELNOSW] (.+)°[ELNOSW].*/gim, '\\gpsSO{$1}{$2}')
			.replace(/^(.+) \n\n{1}/gim, '$1\n\n')
			.replace(/[(] $/gim, '(');
	}} type='button' value='event times' /><input className='button initialize' onClick={() => {
		const input = document.getElementById("input");
		const output = document.getElementById("output");
		const array = input.value.split('\n');
		const year = array[0];
		const month = array[1];
		let builder = '';
		(new Array(31)).fill().forEach((value, index) => {
			const day = index + 1;

			let yearMonthDay = moment();

			yearMonthDay.year(year);
			yearMonthDay.month(month - 1);
			yearMonthDay.date(day);

			builder += `\\begin{center}% ${
				yearMonthDay.format('dddd')
			}\n\n${year}-${month}-${
				new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(day)
			}\n\n\\end{center}\n\n\n\n`
		});
		output.value = builder;
	}} type='button' value='initialize' /><input className='button gym' onClick={() => {
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
			.map(line => line.map(getData).join(''))
			.map(line => `\t\\item ${line}`);
		// output.value = JSON.stringify(lineList);
		output.value = lineList.join('\n');
	}} type='button' value='workout' /></>;
}

export default App;
