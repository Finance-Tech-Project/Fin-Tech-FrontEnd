import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const CircularProgressForChart = () => {
    return (
        <Box sx={{ 
            width: '100%', 
            height: '638px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            border: '2px solid rgba(70, 75, 114, 0.8)'
        }}>
            <CircularProgress sx={{ color: 'white' }} size={100} />
        </Box>
    )
}

export default CircularProgressForChart