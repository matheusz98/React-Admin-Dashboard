import { Badge, useTheme } from "@mui/material";
import * as S from "./style";

const Logo = () => {
  const theme = useTheme();

  return (
    <S.TooltipWrapper title="React Admin Dashboard" arrow>
      <S.LogoWrapper to="/homepage">
        <Badge
          badgeContent="2.0"
          overlap="circular"
          color="success"
          sx={{
            ".MuiBadge-bade": {
              fontSize: theme.typography.pxToRem(11),
              right: -2,
              top: 8,
            },
          }}
        >
          <S.LogoSignWrapper>
            <S.LogoSign>
              <S.LogoSignInner />
            </S.LogoSign>
          </S.LogoSignWrapper>
        </Badge>
      </S.LogoWrapper>
    </S.TooltipWrapper>
  );
};

export default Logo;
