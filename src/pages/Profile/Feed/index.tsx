import { AddTwoTone } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { feedItems } from "../../../data/feedData";

const Feed = () => {
  return (
    <Card>
      <CardHeader title="Followers Feed" />
      <Divider />
      <Box p={2}>
        <Grid container spacing={0}>
          {feedItems.map((item) => (
            <Grid key={item.name} item xs={12} sm={6} lg={4}>
              <Box display="flex" alignItems="flex-start" p={3}>
                <Avatar src={item.avatar} />
                <Box pl={2}>
                  <Typography variant="subtitle2" gutterBottom>
                    {item.company}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography color="text.primary" sx={{ pb: 2 }}>
                    {item.jobtitle}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<AddTwoTone />}
                  >
                    Follow
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default Feed;
