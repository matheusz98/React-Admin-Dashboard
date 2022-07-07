import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { Helmet } from "react-helmet-async";
import * as S from "./styles";
import ErrorImg from "../../../assets/images/status/404.svg";
import { SearchTwoTone } from "@mui/icons-material";

const Status404 = () => {
  return (
    <>
      <Helmet>
        <title>Status - 404</title>
      </Helmet>
      <S.MainContent>
        <Container maxWidth="md" sx={{ py: 4}}>
          <Box textAlign="center">
            <img src={ErrorImg} alt="404" height={180} />
            <Typography variant="h2" sx={{ my: 2 }}>
              The page you were looking for doesn't exist.
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
              sx={{ mb: 4 }}
            >
              It's on us, we moved the content to a different page. The search
              below should help!
            </Typography>
          </Box>
          <Container maxWidth="sm">
            <Card sx={{ textAlign: "center", mt: 3, p: 4 }}>
              <FormControl variant="outlined" fullWidth>
                <S.OutlinedInputWrapper
                  type="text"
                  placeholder="Search terms here..."
                  endAdornment={
                    <InputAdornment position="end">
                      <S.ButtonSearch variant="contained" size="small">
                        Search
                      </S.ButtonSearch>
                    </InputAdornment>
                  }
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchTwoTone />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Divider sx={{ my: 4 }}>OR</Divider>
              <Button variant="outlined" href="/">
                Go to Homepage
              </Button>
            </Card>
          </Container>
        </Container>
      </S.MainContent>
    </>
  );
};

export default Status404;
