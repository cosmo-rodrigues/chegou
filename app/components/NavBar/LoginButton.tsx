import { Button, ButtonProps, styled } from '@mui/material';
import { amber } from '@mui/material/colors';

export const VipButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(amber[600]),
  backgroundColor: amber[600],
  '&:hover': {
    backgroundColor: amber[800],
  },
}));
