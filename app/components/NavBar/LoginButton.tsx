import { Login } from '@mui/icons-material';
import { Box, Button, useTheme } from '@mui/material';
import { amber } from '@mui/material/colors';

export const VipButton = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: amber[600],
        borderRadius: '4px',
        color: theme.palette.getContrastText(amber[600]),
        marginLeft: 'auto',
        ':hover': { backgroundColor: amber[800] },
      }}
    >
      <Button startIcon={<Login />}>ÁREA VIP</Button>
    </Box>
  );
};
