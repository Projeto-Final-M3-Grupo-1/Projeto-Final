import { Children } from "react";
import { StyledAside } from "../Aside/style";
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
