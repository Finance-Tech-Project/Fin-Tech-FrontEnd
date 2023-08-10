import { useEffect } from "react"
import { VStack, Box, Container, Stack, Flex, flexbox } from "@chakra-ui/react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets-fixed";
import { ChartTvContainer } from "../../../Styles/ChartTVStyle";

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
		<VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
			<ChartTvContainer>
				<Container maxW="container.xl" height={"60vh"}>
					<AdvancedRealTimeChart 
						timezone={"Asia/Jerusalem"}
						theme="dark"
						autosize={true}
					></AdvancedRealTimeChart>
				</Container>
			</ChartTvContainer>
		</VStack>
	)
}

export default ChartsDashboard