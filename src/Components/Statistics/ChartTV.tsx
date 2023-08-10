import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { HashRouter, Routes, Route } from "react-router-dom";
import Statistics from './Statistics';
import ChartsDashboard from './Containers/ChartsDashboard';


const theme = extendTheme({
	config: {
		initialColorMode: "dark"
	}
});

const ChartTV = () => {
	return (
		<ChakraProvider theme={theme}>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Statistics />}>
						<Route index element={<ChartsDashboard />} />
					</Route>
				</Routes>
			</HashRouter>
		</ChakraProvider>
	)
}

export default ChartTV