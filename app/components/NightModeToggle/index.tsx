import { Box, IconButton } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { useThemeContext } from '@/app/context/ThemeContextProvider';

const NightModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderColor: 'text.primary',
        border: '1px solid',
        borderRadius: 25,
        p: 2,
      }}
    >
      {mode} mode
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color='inherit'>
        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
};

export default NightModeToggle;
