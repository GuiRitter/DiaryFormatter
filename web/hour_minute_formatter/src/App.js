import React, { useEffect, useRef } from 'react';

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

	return <><textarea className='input' id='input' /><textarea className='output' id='output' /><input className='button' onClick={() => {
		let input = document.getElementById("input");
		let output = document.getElementById("output");
		output.value = input.value.replace(/^([0-9]{2})([0-9]{2})/gim, '$1:$2. ');
	}} type='button' value='replace'/></>;
}

export default App;
