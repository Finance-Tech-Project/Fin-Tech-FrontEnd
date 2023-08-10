import { Container } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from "react-router-dom";


const Statistics = () => {
	return (
		<Container maxW="container.xl">
			<Outlet />
		</Container>
	)
}

export default Statistics