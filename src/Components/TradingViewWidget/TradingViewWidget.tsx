import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ChartsDashboard from './ChartsDashboard';

const theme = extendTheme({
	config: {
		initialColorMode: "dark"
	}
});

const TradingViewWidget = () => {
	return (
		<ChakraProvider theme={theme}>
			<ChartsDashboard />
		</ChakraProvider>
	)
}

export default TradingViewWidget