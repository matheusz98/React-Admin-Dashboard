import { AddTwoTone } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";

interface PageTitleContentProps {
  heading?: string;
  subHeading?: string;
  docs?: string;
  rest?: any;
}

const PageTitleContent = ({
  heading,
  subHeading,
  docs,
  ...rest
}: PageTitleContentProps) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      {...rest}
    >
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="subtitle2">{subHeading}</Typography>
      </Grid>
      <Grid item>
        <Button
          href={docs}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{ mt: { xs: 2, md: 0 } }}
          startIcon={<AddTwoTone fontSize="small" />}
        >
          {heading} Documentation
        </Button>
      </Grid>
    </Grid>
  );
};

export default PageTitleContent;
