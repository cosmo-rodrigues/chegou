import { Box, IconButton } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { useThemeContext } from '@/app/context/ThemeContextProvider';

const NightModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <Box>
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color='inherit'>
        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
};

export default NightModeToggle;
