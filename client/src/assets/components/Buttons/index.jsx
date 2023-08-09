import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const RadiusButton = styled(Button)(({ theme }) => ({
  borderRadius: '7px',
  border: 'none',
  padding: '0',
  color: 'white',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

export const SquareButton = styled(Button)(({ theme }) => ({
  borderRadius: '0',
  border: 'none',
  padding: '0',
  color: 'white',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));
