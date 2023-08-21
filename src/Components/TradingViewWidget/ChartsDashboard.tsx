import { useEffect } from "react"
import { VStack, Container } from "@chakra-ui/react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets-fixed";
import { TradingViewWidgetContainer } from "../../Styles/TradingViewWidgetStyles/TradingViewWidgetStyle";

const ChartsDashboard = () => {
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
		// Rsponsive widget
		<TradingViewWidgetContainer>
			<VStack>
				<Container maxW="container.xl" height={"80vh"} >
					<AdvancedRealTimeChart
						timezone={"Asia/Jerusalem"}
						theme="dark"
						autosize={true}
						withdateranges
					></AdvancedRealTimeChart>
				</Container>
			</VStack>
		</TradingViewWidgetContainer>
	)
}

export default ChartsDashboard