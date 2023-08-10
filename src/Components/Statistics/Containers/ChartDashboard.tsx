import { useEffect } from "react"
import { VStack, Box } from "@chakra-ui/react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets-fixed";

const ChartDashboard = () => {

	const useScript = (url: string) => {
		useEffect(() => {
			const script = document.createElement("script");
			script.src = url;
			script.async = true;
			document.body.appendChild(script);
			return () => {
				document.body.removeChild(script);
			};
		}, [url]);
	};
	
	return (
		<VStack>
			Charts!
			<Box>
				<AdvancedRealTimeChart
					theme="dark"
					height={500}
				></AdvancedRealTimeChart>
			</Box>
			<Box>
				<AdvancedRealTimeChart
					theme="dark"
					height={500}
				></AdvancedRealTimeChart>
			</Box>
		</VStack>
	)
}

export default ChartDashboard