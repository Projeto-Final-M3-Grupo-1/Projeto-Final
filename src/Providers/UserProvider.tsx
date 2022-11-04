import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import { toast } from "react-toastify";
import { ProjectsContext } from "./ProjectsProvider";

interface IUserContext {
  onSubmitLogin: any;
  onSubmitRegister: any;
  onSubmitOng: any;
  user: any;
  HandleDataUser: any;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}
interface IUserChildren {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserChildren) => {
  const [user, setUser] = useState<any>({});
  const [token, setToken] = useState<string>("");
  const { setShowModal } = useContext(ProjectsContext);

  const navigate = useNavigate();

  const onSubmitLogin = (data: any) => {
    api
      .post("/login", data)
      .then((res) => {
        navigate("/dashboard");
        toast.success("Login realizado com sucesso");
        setUser(res.data.user);
        setShowModal(false);
        HandleDataUser(res.data.user);
        console.log(res.data.user);

        console.log(res);
      })
      .catch(() => toast.error("Email ou senha invalidos"));
  };

  const HandleDataUser = (data: any) => {
    useEffect(() => {
      console.log(data);
    }, []);
  };
  const onSubmitRegister = (data: any) => {
    data.typeUser = "dev";
    api
      .post("/registerdev", data)
      .then(() => {
        toast.success("Cadastro realizado com sucesso!");
        navigate("/home");
      })
      .catch(() => toast.error("Cadastro não realizado"));
  };

  const onSubmitOng = (data: any) => {
    data.typeUser = "ong";
    api
      .post("/registerong", data)
      .then(() => {
        setShowModal(false);
        toast.success("Cadastro realizado com sucesso!");
        navigate("/home");
      })
      .catch(() => toast.error("Cadastro não realizado"));
  };
  return (
    <UserContext.Provider
      value={{
        onSubmitLogin,
        onSubmitRegister,
        onSubmitOng,
        user,
        HandleDataUser,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
