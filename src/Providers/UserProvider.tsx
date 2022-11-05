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
}
interface IUserChildren {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserChildren) => {
  const [user, setUser] = useState<any>({});
  const [token, setToken] = useState<any>({});
  const [email, setEmail] = useState<any>({});
  const [notices, setNotices] = useState<any>({});
  const { setShowModal } = useContext(ProjectsContext);

  const navigate = useNavigate();

  async function onSubmitLogin(data: any){
    try {
      const resp = await api.post("/login", data);
        navigate("/dashboard");
        toast.success("Login realizado com sucesso");
        console.log(resp.data);
        

        const { email } = resp.data.user;
        const { user: userResp, accessToken } = resp.data;

        console.log(userResp);
        

        localStorage.setItem("@kenzieHub:token", token);
        localStorage.setItem("@kenzieHub:name", email);
        
        setUser(userResp);
        // setToken(accessToken + "")
        setShowModal(false);
    } catch (error) {
      toast.error("Email ou senha invalidos")
    }
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

  // Carregamento inicial
  useEffect(() => {
    async function loadUser() {

      const tokenUser = localStorage.getItem("@kenzieHub:token");
      const emailUser = localStorage.getItem("@kenzieHub:name");

      if (tokenUser){
        try {
          const resp = await api.get("/notices");
          console.log(resp);

          setNotices(resp);
    
          // setUser(data);
          // setTechs(data.techs);

          // setName(nameBusca + '');
          // setModule(moduleBusca + '');
          // setToken(tokenBusca);
        } catch (error) {
          console.log(error);
        }
      }
      // setLoading(false);
    }
    loadUser();
  

  return (
    <UserContext.Provider
      value={{
        onSubmitLogin,
        onSubmitRegister,
        onSubmitOng,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
