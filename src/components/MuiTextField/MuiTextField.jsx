import React from 'react';
import { Typography, Stack, TextField, InputAdornment } from '@mui/material';

function MuiTextField() {
  const [inputvalue, setInputValue] = React.useState('');
  return (
    <div>
      <Typography variant="h4">Text field</Typography>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="standard" />
        </Stack>

        <Stack direction="row">
          <TextField label="small secondary" size="small" color="secondary" />
        </Stack>
        <Stack direction="row">
          <TextField
            label="Enter password"
            size="small"
            type="password"
            // inputProps={{ readOnly: true }}
            // disabled
            color="info"
            required
            helperText="do not share your password with anyone"
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            label="UserName"
            size="small"
            value={inputvalue}
            onChange={e => {
              setInputValue(e.target.value);
            }}
            helperText={
              !inputvalue
                ? 'Required'
                : 'do not share your password with anyone'
            }
            error={!inputvalue}
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            size="small"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </div>
  );
}

export default MuiTextField;
