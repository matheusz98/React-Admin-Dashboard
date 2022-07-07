import {
  ChevronRightTwoTone,
  FindInPageTwoTone,
  SearchTwoTone,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  DialogContent,
  Divider,
  Hidden,
  IconButton,
  InputAdornment,
  lighten,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  Slide,
  Theme,
  Tooltip,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ChangeEvent, forwardRef, ReactElement, Ref, useState } from "react";
import * as S from "./styles";

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Search = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    if (e.target.value) {
      if (!showResults) {
        setShowResults(true);
      }
    } else {
      setShowResults(false);
    }
  };

  const handleOpenSearch = () => {
    setOpen(true);
  };

  const handleCloseSearch = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Search" arrow>
        <IconButton onClick={handleOpenSearch} color="primary">
          <SearchTwoTone />
        </IconButton>
      </Tooltip>

      <S.DialogWrapper
        open={open}
        onClose={handleCloseSearch}
        maxWidth="md"
        fullWidth
        scroll="paper"
        TransitionComponent={Transition}
      >
        <S.DialogTitleWrapper>
          <S.SearchInputWrapper
            value={searchValue}
            onChange={handleSearch}
            autoFocus={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchTwoTone />
                </InputAdornment>
              ),
            }}
            fullWidth
            placeholder="Search..."
            label="Search"
          />
        </S.DialogTitleWrapper>
        <Divider />

        {showResults && (
          <DialogContent>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ pt: 0, pb: 1 }}
            >
              <Typography variant="body2" component="span">
                Search results for {}
                <Typography
                  variant="body1"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  {searchValue}
                </Typography>
              </Typography>
              <Link href="#" variant="body2" underline="hover">
                Advanced search
              </Link>
            </Box>
            <Divider sx={{ my: 1 }} />
            <List disablePadding>
              <ListItem button>
                <Hidden smDown>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background: (theme: Theme) =>
                          theme.palette.secondary.main,
                      }}
                    >
                      <FindInPageTwoTone />
                    </Avatar>
                  </ListItemAvatar>
                </Hidden>
                <Box flex="1">
                  <Box display="flex" justifyContent="space-between">
                    <Link
                      href="#"
                      variant="body2"
                      sx={{ fontWeight: "bold" }}
                      underline="hover"
                    >
                      Dashboard for Healthcare Platform
                    </Link>
                  </Box>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      color: (theme: Theme) =>
                        lighten(theme.palette.secondary.main, 0.5),
                    }}
                  >
                    This page contains all the necessary information for
                    managing all hospital staff.
                  </Typography>
                </Box>
                <ChevronRightTwoTone />
              </ListItem>
              <Divider component="li" sx={{ my: 1 }} />
              <ListItem button>
                <Hidden smDown>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background: (theme: Theme) =>
                          theme.palette.secondary.main,
                      }}
                    >
                      <FindInPageTwoTone />
                    </Avatar>
                  </ListItemAvatar>
                </Hidden>
                <Box flex="1">
                  <Box display="flex" justifyContent="space-between">
                    <Link
                      href="#"
                      variant="body2"
                      sx={{ fontWeight: "bold" }}
                      underline="hover"
                    >
                      Example Projects Application
                    </Link>
                  </Box>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      color: (theme: Theme) =>
                        lighten(theme.palette.secondary.main, 0.5),
                    }}
                  >
                    This is yet another search result pointing to a app page.
                  </Typography>
                </Box>
                <ChevronRightTwoTone />
              </ListItem>
              <Divider sx={{ my: 1 }} component="li" />
              <ListItem button>
                <Hidden smDown>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background: (theme: Theme) =>
                          theme.palette.secondary.main,
                      }}
                    >
                      <FindInPageTwoTone />
                    </Avatar>
                  </ListItemAvatar>
                </Hidden>
                <Box flex="1">
                  <Box display="flex" justifyContent="space-between">
                    <Link
                      href="#"
                      variant="body2"
                      sx={{ fontWeight: "bold" }}
                      underline="hover"
                    >
                      Search results page
                    </Link>
                  </Box>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{
                      color: (theme: Theme) =>
                        lighten(theme.palette.secondary.main, 0.5),
                    }}
                  >
                    Choose if you would like to show or not this typography
                    section here...
                  </Typography>
                </Box>
                <ChevronRightTwoTone />
              </ListItem>
            </List>
            <Divider sx={{ mt: 1, mb: 2 }} />
            <Box sx={{ textAlign: "center" }}>
              <Button color="primary">View all search results</Button>
            </Box>
          </DialogContent>
        )}
      </S.DialogWrapper>
    </>
  );
};

export default Search;
