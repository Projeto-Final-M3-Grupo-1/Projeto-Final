import styled from "styled-components";

export const StyledNewProjectButton = styled.button`
<<<<<<< HEAD
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 149px;
  height: 150px;
=======
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    position: absolute;
    margin-left: 45%;   
    flex-wrap: wrap;

    width: 9.3rem;
    height: 9.37rem;
>>>>>>> 4df95ebb042950617c74158a41785caea4f2224c

  background: var(--button-background-color);
  color: var(--button-text-color);
  font-size: var(--button-text-size);
  font-weight: var(--button-text-weight);
  border-radius: 50%;
  border: 8px;
  border: 8px solid var(--white);
  cursor: pointer;

<<<<<<< HEAD
  &:hover {
    background: var(--button-background-hover-color);
    transition: var(--button-hover-transition);
  }
=======
    &:hover {
        background: var(--button-background-hover-color);
        transition: var(--button-hover-transition);
    }

    @media(max-width: 400px){
        margin-left: 40%; 
    }

>>>>>>> 4df95ebb042950617c74158a41785caea4f2224c
`;

export const StyledLoginButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  gap: 10px;

  width: 99px;
  height: 40px;

  background: var(--button-background-color);
  color: var(--button-text-color);
  font-size: var(--button-text-size);
  font-weight: var(--button-text-weight);
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: var(--button-background-hover-color);
    transition: var(--button-hover-transition);
  }
`;

export const StyledButtonCta = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 478px;
  height: 40px;

  background: var(--button-background-color);
  color: var(--button-text-color);
  font-size: var(--button-text-size);
  font-weight: var(--button-text-weight);
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: var(--button-background-hover-color);
    transition: var(--button-hover-transition);
  }
`;

export const StyledButtonCadastro = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  gap: 10px;

  width: 205px;
  height: 40px;

  background: var(--button-background-color);
  color: var(--button-text-color);
  font-size: var(--button-text-size);
  font-weight: var(--button-text-weight);
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: var(--button-background-hover-color);
    transition: var(--button-hover-transition);
  }
`;
