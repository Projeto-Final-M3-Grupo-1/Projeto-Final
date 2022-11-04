import { createContext, useContext, useState } from "react";
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
    const { setShowModal } = useContext(ProjectsContext);

    const navigate = useNavigate();

    const onSubmitLogin = async (data: any) => {
        await api
            .post("/login", data)
            .then((res) => {
                navigate("/dashboard");
                toast.success("Login realizado com sucesso");
                setUser(res.data.user);
                localStorage.setItem("token", res.data.accessToken);
                localStorage.setItem("user", JSON.stringify(res.data.user));
            })
            .catch(() => toast.error("Email ou senha invalidos"));
    };
    const onSubmitRegister = (data: any) => {
        data.typeUser = "dev";
        api.post("/registerdev", data)
            .then(() => {
                navigate("/home");
                toast.success("Cadastro realizado com sucesso!");
            })
            .catch(() => toast.error("Cadastro não realizado"));
    };

    const onSubmitOng = (data: any) => {
        data.typeUser = "ong";
        api.post("/registerong", data)

            .then(() => {
                navigate("/home");
                toast.success("Cadastro realizado com sucesso!");
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
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
