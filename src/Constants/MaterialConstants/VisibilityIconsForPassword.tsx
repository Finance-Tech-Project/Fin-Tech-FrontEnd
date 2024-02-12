import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";

export const visibilityIconsForPassword = (
    showPassword: boolean,
    handleClickShowPassword: () => void, 
    handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void
) => {
    return (
        <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
            >
                {showPassword ? <VisibilityOff sx={{ color: 'white', zIndex: '1' }} />
                    : <Visibility sx={{ color: 'white', zIndex: '1' }} />}
            </IconButton>
        </InputAdornment>
    )
};