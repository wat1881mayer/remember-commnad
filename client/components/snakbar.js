import react, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { SnackbarContext } from '../context/snackbar-context';

const Alert = react.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const { snackState, toggleSnack } = useContext(SnackbarContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    toggleSnack(false, snackState.type, '');
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackState.isOpen}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackState.type}
          sx={{ width: '100%' }}
        >
          {snackState.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
