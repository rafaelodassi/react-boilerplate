import React from 'react';

import { Layout } from 'antd';

import ButtonProcess from './components/buttomProcess/buttonProcess';

import './App.scss';

const App = () => {
	return (
		<div className="App">
			<Layout className="app-container">
				<ButtonProcess />
			</Layout>
		</div>
	);
}

export default App;
