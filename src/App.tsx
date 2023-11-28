import React from 'react';
import {Box, Text} from 'ink';
import CommonGame from './interface/CommonGame.jsx';
import SelectInput from 'ink-select-input';
import DynamicTreeGame from './interface/DynamicTreeGame.jsx';
import ListsSearchProcedure from './interface/ListsSearchProcedure.jsx';
import BacktrackingSearchProcedure from './interface/BacktrackingSearchProcedure.jsx';
import DepthFirstSearch from './engine/Search/DepthFirstSearch.js';
import BreadthFirstSearch from './engine/Search/BreadthFirstSearch.js';

enum Option {
	CommonGame,
	DynamicTreeGame,
	Backtracking,
	BreadthFirstSearch,
	DepthFirstSearch,
}

export default function App() {
	const [selectedOption, setSelectedOption] = React.useState<Option>();
	const options = [
		{
			label: 'Jogo Comum',
			value: Option.CommonGame,
		},
		{
			label: 'Árvore dinâmica',
			value: Option.DynamicTreeGame,
		},
		{
			label: 'Backtracking',
			value: Option.Backtracking,
		},
		{
			label: 'Busca em largura',
			value: Option.BreadthFirstSearch,
		},
		{
			label: 'Busca em profundidade',
			value: Option.DepthFirstSearch,
		},
	];

	function handleSelect(option: Option) {
		setSelectedOption(option);
	}

	let interfaceComponent;

	switch (selectedOption) {
		case undefined:
			interfaceComponent = (
				<SelectInput
					items={options}
					onSelect={item => handleSelect(item.value)}
				/>
			);
			break;
		case Option.CommonGame:
			interfaceComponent = <CommonGame />;
			break;
		case Option.DynamicTreeGame:
			interfaceComponent = <DynamicTreeGame />;
			break;
		case Option.Backtracking:
			interfaceComponent = <BacktrackingSearchProcedure />;
			break;
		case Option.BreadthFirstSearch:
			interfaceComponent = (
				<ListsSearchProcedure
					searchAlgorithm={new BreadthFirstSearch()}
					searchAlgorithmSafeName={BreadthFirstSearch.getSafeAlgorithmName()}
				/>
			);
			break;
		case Option.DepthFirstSearch:
			interfaceComponent = (
				<ListsSearchProcedure
					searchAlgorithm={new DepthFirstSearch()}
					searchAlgorithmSafeName={DepthFirstSearch.getSafeAlgorithmName()}
				/>
			);
			break;
		default:
			break;
	}

	return (
		<Box flexDirection="column">
			<Text bold inverse color={'yellowBright'}>
				Ponte Escura
			</Text>
			<Box flexDirection="column" marginTop={1}>
				{interfaceComponent}
			</Box>
		</Box>
	);
}
