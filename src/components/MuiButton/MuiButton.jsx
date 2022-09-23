import { Button, Typography, Stack, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
    <div>
      <Typography variant="h2">Buttons Props</Typography>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Typography variant="h3">Button color</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
        </Stack>

        <Typography variant="h3">Button Sizes</Typography>
        <Stack display="block" spacing={4} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button
            variant="contained"
            disableElevation
            color="warning"
            size="medium"
          >
            Medium
          </Button>
          <Button variant="contained" color="info" size="large">
            Large
          </Button>
        </Stack>
        <Typography variant="h3">Button Icons</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button
            variant="contained"
            disableRipple
            disableElevation
            endIcon={<SendIcon />}
          >
            Send
          </Button>
          <IconButton>
            <SendIcon size="small" color="success" />
          </IconButton>
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiButton;
