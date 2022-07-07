import {
  FavoriteTwoTone,
  ShoppingBagTwoTone,
  StarTwoTone,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import * as S from "./styles";

const RecentActivity = () => {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title="Recent Activity" />
      <Divider />
      <Box display="flex" alignItems="flex-start" py={4} px={2}>
        <S.AvatarPrimary>
          <ShoppingBagTwoTone />
        </S.AvatarPrimary>
        <Box flex={1} pl={2}>
          <Typography variant="h3">Orders</Typography>
          <Box display="flex" pt={2}>
            <Box pr={8}>
              <Typography
                variant="caption"
                gutterBottom
                sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}
              >
                Total
              </Typography>
              <Typography variant="h2">485</Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                gutterBottom
                sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}
              >
                Failed
              </Typography>
              <Typography variant="h2">8</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box display="flex" alignItems="flex-start" py={4} px={2}>
        <S.AvatarPrimary>
          <FavoriteTwoTone />
        </S.AvatarPrimary>
        <Box flex={1} pl={2}>
          <Typography variant="h3">Favourites</Typography>
          <Box display="flex" pt={2}>
            <Box pr={8}>
              <Typography
                variant="caption"
                gutterBottom
                sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}
              >
                Products
              </Typography>
              <Typography variant="h2">64</Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                gutterBottom
                sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}
              >
                Lists
              </Typography>
              <Typography variant="h2">15</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box display="flex" alignItems="flex-start" py={4} px={2}>
        <S.AvatarPrimary>
          <StarTwoTone />
        </S.AvatarPrimary>
        <Box flex={1} pl={2}>
          <Typography variant="h3">Reviews</Typography>
          <Box display="flex" pt={2}>
            <Box pr={8}>
              <Typography
                variant="caption"
                gutterBottom
                sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}
              >
                Total
              </Typography>
              <Typography variant="h2">654</Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                gutterBottom
                sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}
              >
                Useful
              </Typography>
              <Typography variant="h2">21</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default RecentActivity;
