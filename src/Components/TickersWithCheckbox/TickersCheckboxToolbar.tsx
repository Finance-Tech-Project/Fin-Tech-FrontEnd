import { DeleteIcon } from '@chakra-ui/icons'
import { Checkbox, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';

interface ToolbarProps {
    numSelected: number
    handleSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleDeleteAllSelectedTickers: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    rowCount: number
}

const TickersCheckboxToolbar = ({ numSelected, handleSelectAllClick, rowCount,  handleDeleteAllSelectedTickers}: ToolbarProps) => {
    return (
        <Toolbar sx={{backgroundColor: 'aqua', border: '1px solid black'}}>
            <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={handleSelectAllClick}
            />
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Choice and add tickers to your watchlist
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton onClick={(event) => handleDeleteAllSelectedTickers(event)}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    )
}

export default TickersCheckboxToolbar