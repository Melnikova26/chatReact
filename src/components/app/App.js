import { useState } from 'react';
import './App.css';

function App() {
	const [value, setValue] = useState('');
	const [messages, setMessages] = useState([]);
	const regEx = /viagra|xxx/gi;

	const handleChange = (event) => {
		setValue(event.target.value);
	}
	const getComment = (event) => {
		event.preventDefault();
		if(regEx.test(value)){
			const newValue = value.replace(regEx, '***');
			setMessages((messages) => [newValue, ...messages]);
		} else {
			setMessages([value, ...messages]);
		}

		setValue('');
	}
	return (
		<div className="App">
		<div id="container">
			{
				messages.map((message, i) => {
					if(i === 0){
						return <div key={i} className="border first">{message}</div>
					} else {
						return <div key={i} className="border">{message}</div>
					}
				})
			}
		</div>
		<textarea id='newComment' 
					type="text"
					value={value}
					onChange={handleChange}></textarea>
		<button onClick={getComment}>Send</button>
		</div>
	);
}

export default App;
