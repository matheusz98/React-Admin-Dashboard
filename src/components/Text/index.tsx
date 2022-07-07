import React, { ReactNode } from "react";
import clsx from "clsx";
import * as S from "./styles";

interface TextProps {
  className?: string;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "success"
    | "info"
    | "black";
  flex?: boolean;
  children?: ReactNode;
  rest?: any;
}

const Text = ({ className, color, flex, children, ...rest }: TextProps) => {
  return (
    <S.TextWrapper
      className={clsx("MuiText-" + color, { flexItem: flex })}
      {...rest}
    >
      {children}
    </S.TextWrapper>
  );
};

export default Text;
