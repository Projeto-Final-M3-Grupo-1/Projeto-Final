import { StyledAside } from "../Asides/style";
import { ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}
export const Menu = ({ children }: IChildren) => {
  return (
    <StyledAside>
      <nav>{children}</nav>
    </StyledAside>
  );
};
