import { Container } from "@mui/material";
import { ReactNode } from "react";
import * as S from "./styles";

interface PageTitleProps {
  children?: ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <S.PageTitle className="MuiPageTitle-wrapper">
      <Container maxWidth="lg">{children}</Container>
    </S.PageTitle>
  );
};

export default PageTitle;
