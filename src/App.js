import React, { useState } from "react";


import "./App.css";

const App = () => {
const [counter, setCounter] = useState(0)

const incrementCount = () => {
	setCounter(counter + 1)
}

const decrementCount = () => {
	setCounter(counter - 1)
}

return (
	<div style={{
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '300%',
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: '-15%',
	}}>
	Counter App
	<div style={{
		fontSize: '120%',
		position: 'relative',
		top: '10vh',
	}}>
		{counter}
	</div>
	<div className="buttons">
		<button className="decrement"	onClick={decrementCount}>Decrement</button>
    <button className="increment"	onClick={incrementCount}>Increment</button>
	</div>
	</div>
)
}

export default App