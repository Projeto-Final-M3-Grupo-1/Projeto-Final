import { StyledAside, StyledAsideMovie } from "../Asides/style";
import { ReactNode } from "react";
import { useContext } from "react";
import { ProjectsContext } from "../../Providers/ProjectsProvider";
interface IChildren {
  children: ReactNode;
}
export const Menu = ({ children }: IChildren) => {
  const { showAside } = useContext(ProjectsContext);
  return (
    <>
      {showAside ? (
        <StyledAside>
          <nav>{children}</nav>
        </StyledAside>
      ) : (
        <StyledAsideMovie>
          <nav>{children}</nav>
        </StyledAsideMovie>
      )}
    </>
  );
};
