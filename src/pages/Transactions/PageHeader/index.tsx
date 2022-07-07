import { AddTwoTone } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";

const PageHeader = () => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Transactions
        </Typography>
        <Typography variant="subtitle2">
          Catherine Pike, these are your recent transactions
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" startIcon={<AddTwoTone fontSize="small" />}>
          Create transaction
        </Button>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
