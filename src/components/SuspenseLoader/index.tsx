import { Box, CircularProgress } from "@mui/material";
import nProgress from "nprogress";
import { useEffect } from "react";

const SuspenseLoader = () => {
  useEffect(() => {
    nProgress.start();

    return () => {
      nProgress.done();
    };
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100%", position: "fixed", top: 0, left: 0 }}
    >
      <CircularProgress size={64} disableShrink thickness={3} />
    </Box>
  );
};

export default SuspenseLoader;
