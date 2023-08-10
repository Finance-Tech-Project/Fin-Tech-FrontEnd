import React, { useState } from 'react'
import { Button } from "@chakra-ui/react";
import { ChartEvents } from '../../../Types/chartTVTypes';

const EventsDashboard = () => {
	const [events, setEvents] = useState<Array<ChartEvents>>([
		{
			name: "",
			doxxed: false,
			audit: false,
			staySafuScan: false,
			reflections: false,
			socials: false,
			earlySaleDate: new Date(),
			liquidityDate: new Date(),
			taxCap: false,
			elevatedTax: false,
			lowTax: false,
			noTax: false
		}
	]);

	return (
		<Button isLoading></Button>
	)
}

export default EventsDashboard