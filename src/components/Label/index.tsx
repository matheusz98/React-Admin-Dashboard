import { ReactNode } from "react";
import * as S from "./styles";

interface LabelProps {
  className?: string;
  color?:
    | "primary"
    | "black"
    | "secondary"
    | "error"
    | "warning"
    | "success"
    | "info";
  children?: ReactNode;
  rest?: any;
}

const Label = ({ className, color, children, ...rest }: LabelProps) => {
  return (
    <S.LabelWrapper className={"MuiLabel-" + color} {...rest}>
      {children}
    </S.LabelWrapper>
  );
};

export default Label;
